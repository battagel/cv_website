import PhotoCarousel from "../ui/PhotoCarousel";
import type { PhotoCarouselConfig } from "../ui/PhotoCarousel";

export type SpotlightSectionConfig = {
    id: string;
    title: string;
    body: string;
    photoCarousel: PhotoCarouselConfig;
};

type SpotlightSectionProps = {
    sectionConfig: SpotlightSectionConfig;
};

export default function SpotlightSection({ sectionConfig }: SpotlightSectionProps) {
    const paragraphs = sectionConfig.body
        .trim()
        .split(/\n\s*\n/)
        .map((paragraph) => paragraph.trim())
        .filter(Boolean);
    
    return (
        <section id={sectionConfig.id} className="section spotlight-project">
            <div className="about-bubble">
                <div className="section-header">
                    <h2>{sectionConfig.title}</h2>
                </div>
                <div className="spotlight-grid">
                    <div className="spotlight-copy">
                        {paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                    <PhotoCarousel uiConfig={sectionConfig.photoCarousel} />
                </div>
            </div>
        </section>
    );
}
