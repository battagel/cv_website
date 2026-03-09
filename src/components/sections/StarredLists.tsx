import { useEffect, useState } from "react";

// This comoponent fetches and displays the user's GitHub starred lists (collections).
//
// NOTE: This is currently unusable as it requires authentication to access the GitHub GraphQL API.
//       As the website is hosted statically, we would need to implement a backend proxy to
//       securely fetch this data without exposing API tokens.

type Repo = {
    id: string;
    name: string;
    description: string | null;
    url: string;
    primaryLanguage: {
        name: string;
    } | null;
};

type StarredList = {
    name: string;
    description: string;
    items: Repo[];
};

export type StarredListsSectionConfig = {
    title: string;
    subtitle: string;
    loading: string;
    error: string;
    linkLabel: string;
};

const defaultSectionConfig: StarredListsSectionConfig = {
    title: "Collections",
    subtitle: "Curated lists of tools and resources I follow.",
    loading: "Loading collections...",
    error: "Error loading starred lists",
    linkLabel: "GitHub",
};

type StarredListsProps = {
    sectionConfig?: StarredListsSectionConfig;
};

export default function StarredLists({ sectionConfig = defaultSectionConfig }: StarredListsProps) {
    const [lists, setLists] = useState<StarredList[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isActive = true;

        const fetchLists = async () => {
            try {
                const query = `
                    query {
                        user(login: "battagel") {
                            starredLists(first: 10) {
                                edges {
                                    node {
                                        name
                                        description
                                        items(first: 12) {
                                            edges {
                                                node {
                                                    ... on Repository {
                                                        id
                                                        name
                                                        description
                                                        url
                                                        primaryLanguage {
                                                            name
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                `;

                const res = await fetch("https://api.github.com/graphql", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ query }),
                });

                if (!res.ok) {
                    throw new Error("Failed to fetch starred lists");
                }

                const data = await res.json();

                if (data.errors) {
                    throw new Error(data.errors[0]?.message || "GraphQL error");
                }

                const starredLists: StarredList[] = data.data.user.starredLists.edges.map(
                    (edge: any) => ({
                        name: edge.node.name,
                        description: edge.node.description || "",
                        items: edge.node.items.edges.map((itemEdge: any) => itemEdge.node),
                    })
                );

                if (isActive) {
                    setLists(starredLists);
                    setLoading(false);
                }
            } catch (err) {
                if (isActive) {
                    setError(
                        err instanceof Error
                            ? err.message
                            : sectionConfig.error
                    );
                    setLoading(false);
                }
            }
        };

        fetchLists();

        return () => {
            isActive = false;
        };
    }, []);

    return (
        <section className="section starred-lists">
            <div className="section-header">
                <h2>{sectionConfig.title}</h2>
                <p>{sectionConfig.subtitle}</p>
            </div>

            {loading && <p className="status">{sectionConfig.loading}</p>}
            {error && <p className="status error">{error}</p>}

            <div className="lists-grid">
                {lists.map((list) => (
                    <div key={list.name} className="list-section">
                        <h3>{list.name}</h3>
                        {list.description && <p className="list-desc">{list.description}</p>}
                        <div className="card-grid" style={{ marginTop: "1rem" }}>
                            {list.items.map((repo) => (
                                <article key={repo.id} className="project-card">
                                    <div>
                                        <h4>{repo.name.replace(/[-_]/g, " ")}</h4>
                                        <p>{repo.description ?? "—"}</p>
                                    </div>
                                    <div className="project-meta">
                                        <span className="language-badge">
                                            {repo.primaryLanguage?.name ?? "Mixed"}
                                        </span>
                                        <a className="text-link" href={repo.url}>
                                            {sectionConfig.linkLabel}
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
