type FeaturedProject = {
    name: string;
    description: string;
    stack: string;
    link: string;
};

export type FeaturedProjectsSectionConfig = {
    title: string;
    subtitle: string;
    linkLabel: string;
    projects: FeaturedProject[];
};

type FeaturedProjectsProps = {
    sectionConfig: FeaturedProjectsSectionConfig;
};

export default function FeaturedProjects({ sectionConfig }: FeaturedProjectsProps) {
    return (
        <section id="featured" className="section featured">
            <div className="section-header">
                <h2>{sectionConfig.title}</h2>
                <p>{sectionConfig.subtitle}</p>
            </div>
            <div className="card-grid">
                {sectionConfig.projects.map((project) => (
                    <article key={project.name} className="project-card">
                        <div>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                        </div>
                        <div className="project-meta">
                            <span>{project.stack}</span>
                            <a className="text-link" href={project.link}>
                                {sectionConfig.linkLabel}
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
