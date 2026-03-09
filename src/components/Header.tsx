import * as Switch from "@radix-ui/react-switch";
import { Sun, MoonStars } from "tabler-icons-react";

export type HeaderSectionConfig = {
    brand: {
        name: string;
        logo: string;
    };
    nav: Array<{
        label: string;
        href: string;
    }>;
};

type HeaderProps = {
    theme: "light" | "dark";
    onToggleTheme: () => void;
    sectionConfig: HeaderSectionConfig;
};

export default function Header({ theme, onToggleTheme, sectionConfig }: HeaderProps) {
    return (
        <header className="site-header">
            <div className="header-inner">
                <a className="brand" href="#top">
                    <img src={sectionConfig.brand.logo} alt={sectionConfig.brand.name} className="brand-mark" />
                    <span className="brand-name">{sectionConfig.brand.name}</span>
                </a>
                <nav className="site-nav" aria-label="Primary">
                    {sectionConfig.nav.map((item) => (
                        <a key={item.href} href={item.href}>{item.label}</a>
                    ))}
                </nav>
                <div className="header-actions">
                    <span
                        className={`theme-label theme-icon ${theme === "light" ? "is-active" : "is-inactive"}`}
                        aria-hidden={theme !== "light"}
                    >
                        <Sun />
                    </span>
                    <Switch.Root
                        className="theme-switch"
                        checked={theme === "dark"}
                        onCheckedChange={onToggleTheme}
                        aria-label="Toggle dark mode"
                    >
                        <Switch.Thumb className="theme-switch-thumb" />
                    </Switch.Root>
                    <span
                        className={`theme-label theme-icon ${theme === "dark" ? "is-active" : "is-inactive"}`}
                        aria-hidden={theme !== "dark"}
                    >
                        <MoonStars />
                    </span>
                </div>
            </div>
        </header>
    );
}
