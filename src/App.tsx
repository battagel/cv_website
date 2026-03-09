import { useEffect, useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/sections/HeroSection";
import SpotlightSection from "./components/sections/SpotlightSection";
import FeaturedProjects from "./components/sections/FeaturedProjects";
import GitHubFeed from "./components/sections/GitHubFeed";
// import StarredLists from "./components/sections/StarredLists";
import Footer from "./components/Footer";
import { getInitialTheme } from "./utils";
import { THEME_STORAGE_KEY } from "./constants";
import {
    aboutSpotlightConfig,
    featuredConfig,
    footerConfig,
    githubFeedConfig,
    headerConfig,
    heroConfig,
    personalInfo,
    vanSpotlightConfig,
} from "./config";

export default function App() {
    const [theme, setTheme] = useState<"light" | "dark">(() => getInitialTheme(THEME_STORAGE_KEY));

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem(THEME_STORAGE_KEY, theme);
    }, [theme]);

    return (
        <div className="app">
            <div id="top" className="top-anchor" aria-hidden="true" />
            <a className="skip-link" href="#content">
                Skip to content
            </a>
            <Header
                theme={theme}
                onToggleTheme={toggleTheme}
                sectionConfig={headerConfig}
            />
            <main id="content">
                <div className="hero-background">
                    <HeroSection
                        sectionConfig={{
                            eyebrow: {
                                items: heroConfig.eyebrowText,
                            },
                            nameTyping: {
                                baseText: heroConfig.nameTyping.base,
                                typoSuffixes: heroConfig.nameTyping.typos,
                                correctSuffix: heroConfig.nameTyping.correct,
                            },
                            role: personalInfo.role,
                            subtitle: heroConfig.subtitle,
                            location: personalInfo.location,
                            buttons: heroConfig.buttons,
                        }}
                    />
                </div>
                <div className="content-background">
                    <SpotlightSection sectionConfig={aboutSpotlightConfig} />
                    <FeaturedProjects sectionConfig={featuredConfig} />
                    <SpotlightSection sectionConfig={vanSpotlightConfig} />
                    <GitHubFeed sectionConfig={githubFeedConfig} />
                    {/* <StarredLists /> */}
                </div>
            </main>
            <Footer
                sectionConfig={{
                    ...footerConfig,
                    email: personalInfo.email,
                }}
            />
        </div>
    );
}
