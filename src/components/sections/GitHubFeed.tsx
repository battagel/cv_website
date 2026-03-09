import { useEffect, useState } from "react";
import { GITHUB_USERNAME, GITHUB_API_PER_PAGE } from "../../constants";

type Repo = {
    id: number;
    name: string;
    description: string | null;
    language: string | null;
    html_url: string;
    homepage: string | null;
    fork: boolean;
    stargazers_count: number;
    updated_at: string;
};

type GroupedRepos = {
    [language: string]: Repo[];
};

export type GitHubFeedSectionConfig = {
    title: string;
    subtitle: string;
    allLabel: string;
    loading: string;
    error: string;
    languageBadgeDefault: string;
    liveButtonLabel: string;
};

type GitHubFeedProps = {
    sectionConfig: GitHubFeedSectionConfig;
};

export default function GitHubFeed({ sectionConfig }: GitHubFeedProps) {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [selectedLanguage, setSelectedLanguage] = useState<string>(sectionConfig.allLabel);
    const [topLanguages, setTopLanguages] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isActive = true;

        const fetchRepos = async () => {
            try {
                const res = await fetch(
                    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=${GITHUB_API_PER_PAGE}&sort=updated`
                );

                if (!res.ok) {
                    throw new Error("Failed to load repos");
                }

                const data: Repo[] = await res.json();
                
                // Filter out forks
                const ownRepos = data.filter(r => !r.fork);
                
                if (isActive) {
                    setRepos(ownRepos);
                    
                    // Calculate languages by repo count
                    const langCounts: { [lang: string]: number } = {};
                    ownRepos.forEach(repo => {
                        const lang = repo.language || "Other";
                        langCounts[lang] = (langCounts[lang] || 0) + 1;
                    });
                    
                    const topLangs = Object.entries(langCounts)
                        .sort((a, b) => b[1] - a[1])
                        .map(([lang]) => lang);
                    
                    setTopLanguages(topLangs);
                    setLoading(false);
                }
            } catch (err) {
                if (isActive) {
                    setError(err instanceof Error ? err.message : sectionConfig.error);
                    setLoading(false);
                }
            }
        };

        fetchRepos();

        return () => {
            isActive = false;
        };
    }, []);

    const grouped = repos.reduce<GroupedRepos>((acc, repo) => {
        const lang = repo.language || "Other";
        if (!acc[lang]) acc[lang] = [];
        acc[lang].push(repo);
        return acc;
    }, {});

    const filtered =
        selectedLanguage === sectionConfig.allLabel
            ? repos
            : (grouped[selectedLanguage] || []);

    return (
        <section id="projects" className="section github">
            <div className="section-header">
                <h2>{sectionConfig.title}</h2>
                <p>{sectionConfig.subtitle}</p>
            </div>

            <div className="feed-controls">
                <button
                    className={selectedLanguage === sectionConfig.allLabel ? "pill active" : "pill"}
                    type="button"
                    onClick={() => setSelectedLanguage(sectionConfig.allLabel)}
                >
                    {sectionConfig.allLabel}
                </button>
                {topLanguages.map((lang) => (
                    <button
                        key={lang}
                        className={selectedLanguage === lang ? "pill active" : "pill"}
                        type="button"
                        onClick={() => setSelectedLanguage(lang)}
                    >
                        {lang}
                    </button>
                ))}
            </div>

            {loading && <p className="status">{sectionConfig.loading}</p>}
            {error && <p className="status error">{error}</p>}

            {!loading && !error && (
                <div className="card-grid">
                    {filtered.map((repo) => (
                        <article
                            key={repo.id}
                            className="project-card"
                            onClick={() => window.open(repo.html_url, "_blank")}
                            role="link"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    window.open(repo.html_url, "_blank");
                                }
                            }}
                        >
                            <div>
                                <h3>
                                    {repo.name
                                        .replace(/[-_]/g, " ")
                                        .split(" ")
                                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                                        .join(" ")}
                                </h3>
                                <p>{repo.description ?? "—"}</p>
                            </div>
                            <div className="project-meta">
                                <span className="language-badge">{repo.language ?? sectionConfig.languageBadgeDefault}</span>
                                {repo.homepage && (
                                    <a
                                        className="live-button"
                                        href={repo.homepage}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                        }}
                                    >
                                        {sectionConfig.liveButtonLabel}
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}
