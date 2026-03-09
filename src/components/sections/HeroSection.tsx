import RotatingText from "../ui/RotatingText";
import TypedText from "../ui/TypedText";
import type { RotatingTextConfig } from "../ui/RotatingText";
import type { TypedTextConfig } from "../ui/TypedText";

type HeroButton = {
    label: string;
    className: string;
    href: string;
};

export type HeroSectionConfig = {
    eyebrow: RotatingTextConfig;
    nameTyping: TypedTextConfig;
    role: string;
    subtitle: string;
    location: string;
    buttons: HeroButton[];
};

type HeroSectionProps = {
    sectionConfig: HeroSectionConfig;
};

export default function HeroSection({ sectionConfig }: HeroSectionProps) {
    return (
        <section id="hero" className="hero">
            <div className="hero-orbs" aria-hidden="true">
                <span className="hero-orb orb-a" />
                <span className="hero-orb orb-b" />
                <span className="hero-orb orb-c" />
            </div>
            <div className="hero-container">
                <div className="hero-grid">
                    <div className="hero-copy">
                        <p className="eyebrow">
                            <RotatingText uiConfig={sectionConfig.eyebrow} />
                        </p>
                        <h1>
                            <TypedText
                                uiConfig={{
                                    ...sectionConfig.nameTyping,
                                    className: "hero-name",
                                }}
                            />
                            <span className="hero-role">{sectionConfig.role}</span>
                        </h1>
                        <p className="hero-subtitle">
                            {sectionConfig.subtitle}
                            <br />
                            <br />
                            Based in {sectionConfig.location}.
                        </p>
                        <div className="hero-actions">
                            {sectionConfig.buttons.map((button) => (
                                <a
                                    key={button.label}
                                    className={button.className}
                                    href={button.href}
                                >
                                    {button.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
