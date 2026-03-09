type FooterLink = {
    label: string;
    href: string;
};

export type FooterSectionConfig = {
    title: string;
    body: string;
    declaration: string;
    copyright: string;
    email: string;
    links: FooterLink[];
    note: string;
};

type FooterProps = {
    sectionConfig: FooterSectionConfig;
};

export default function Footer({ sectionConfig }: FooterProps) {
    return (
        <footer id="contact" className="site-footer">
            <div className="footer-inner">
                <div>
                    <h2>{sectionConfig.title}</h2>
                    <p>
                        {sectionConfig.body}
                    </p>
                    <br />
                    <p className="footer-ai">
                        {sectionConfig.declaration}
                    </p>
                    <p className="footer-copyright">
                        {sectionConfig.copyright}
                    </p>
                </div>
                <div className="footer-links">
                    <a className="text-link" href={`mailto:${sectionConfig.email}`}>
                        {sectionConfig.email}
                    </a>
                    {sectionConfig.links.map((link) => (
                        <a key={link.href} className="text-link" href={link.href}>
                            {link.label}
                        </a>
                    ))}
                    <p className="footer-note">
                        {sectionConfig.note}
                    </p>
                </div>
            </div>
        </footer>
    );
}
