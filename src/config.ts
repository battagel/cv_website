import type { HeaderSectionConfig } from "./components/Header";
import type { FooterSectionConfig } from "./components/Footer";
import type { FeaturedProjectsSectionConfig } from "./components/sections/FeaturedProjects";
import type { GitHubFeedSectionConfig } from "./components/sections/GitHubFeed";
import type { SpotlightSectionConfig } from "./components/sections/SpotlightSection";
export const personalInfo = {
    name: "Matthew Battagel",
    role: "Senior Software Engineer",
    location: "Bristol, UK",
    email: "matthew@battagel.me.uk",
    links: {
        github: "https://github.com/battagel",
        linkedin: "https://www.linkedin.com/in/matthewbattagel",
    },
};

export const headerConfig: HeaderSectionConfig = {
    brand: {
        name: "Matt Battagel",
        logo: "/profile-pic.jpg",
    },
    nav: [
        { label: "About", href: "#about" },
        { label: "Featured", href: "#featured" },
        { label: "Spotlight", href: "#spotlight" },
        { label: "GitHub", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ],
};

export const heroConfig = {
    subtitle:
        // "A social developer who believes the best engineering happens when the team is laughing, whiteboards pens are smoking, and no assumption is left unchallenged.",
        "I believe great engineering happens when teams communicate openly, challenge assumptions respectfully, and learn from each other.",
    nameTyping: {
        base: "Matthew Batt",
        typos: ["ergel", "egel"],
        correct: "agel.",
    },
    eyebrowText: [
        "Why do Java programmers wear glasses? Because they don't C#",
        "A SQL query walks into a bar, approaches two tables and asks 'Can I join you?'",
        "I went to a street where the houses were numbered 8k, 16k, 32k, 64k, 128k, 256k and 512k. It was a trip down Memory Lane.",
        // "If doctors were like software engineers, they would say things like 'Have you tried killing yourself and being reborn?'",
        // "//be nice to the CPU\nThread_sleep(1);",
        // "A programmer's wife asks: 'Would you go to the shop and pick up a loaf of bread? And if they have eggs, get a dozen.' The programmer returns home with 12 loaves of bread. 'They had eggs.'",
        "'Debugging' is like being the detective in a crime drama where you are also the murderer.",
        // "!false (It's funny because it's true.)",
        "Why do programmers always mix up Christmas and Halloween? Because Dec 25 is Oct 31.",
        "The best thing about a Boolean is that even if you are wrong, you are only off by a bit.",
        // "An optimist says 'The glass is half full.' A pessimist says 'The glass is half empty.' A programmer says 'The glass is twice as large as necessary.'",
        "A programmer had a problem. He thought to himself, 'I know, I'll solve it with threads!' has Now problems. two he",
        "'Knock, knock.' 'Who's there?' [very long pause] 'Python.'",
        "[\"hip\",\"hip\"] (hip hip array!)",
        // "Programming is like sex. One mistake and you have to support it for the rest of your life.",
        // "A programmer puts two glasses on his bedside table before going to sleep. A full one, in case he gets thirsty, and an empty one, in case he doesn't.",
        "If you listen to a UNIX shell, can you hear the C?",
        // "What sits on your shoulder and says 'Pieces of 7! Pieces of 7!'? A Parroty Error.",
        "When Apple employees die, does their life HTML5 in front of their eyes?",
        "What did the router say to the doctor? 'It hurts when IP'",
        // "What do you call a group of programmers? An Assembly",
        "Why do Java developers wear sun glasses? Because they stare straight into the Eclipse!",
        // "What do you call software that kills some one? Code-blooded murderer",
        // "What did the .NET developer name their boat? Sea Sharp",
        // "I like my coffee like I like my IDEs… Dark and free",
        // "What's a better name for Frontend Developers? <div>elopers",
        "Which Hogwarts house is able to communicate securely? SSLytheryn",
        "You know how a hacker escapes the FBI? \\FBI",
        "What's the difference between a delicious dinner and a slow computer? One's a rack of lamb and the other's a lack of RAM.",
        // "What is a software developer's favorite herb? Parsley",
        "What is a web developer's favorite tea? URL Grey",
        "What do toll booths and Microsoft have in common? They're both bill gates",
        // "What's a programmer's favorite horror movie? The XORcist or The BLOB",
        "What do you call people who used the internet before it was cool? Httpsters",
        // "What does an embedded systems programmer eat for breakfast? \"char i/o\"s",
        "Why do opticians hate Microsoft software developers? Because they C#",
        // "Why aren't frontend developers humble? They display: flex;",
        // "You know what screams 'I'm insecure'? http://",
        // "Why did the programmer cross the road? To get to the other IDE",
        "What did Peter Parker do after he lost his job as a photographer at the Daily Bugle? He transitioned into web development.",
        "Why was a web developer's boat always sinking? They had too many anchors.",
        "Why are i and j are good sources of information? Because they're always in the loop",
        "How did pirate communicate before the internet? pier-to-pier networking",
        "Why do software developers use dark themes? Because bugs are attracted to the light.",
        "Why do SQL developers have one of the highest rates of divorce? Because they have one-to-many relationships.",
        "What's a programmer's favorite beverage? soda.pop()",
        "What is a programmer's favorite kind of dog? Computer Labs.",
        "What do you call a group of eight hobbits? A hobbyte",
        // "Why do web developers wear glasses? To improve their site.",
        "Why did the IRS decide to investigate a software company that makes command line interpreters? It's a shell company.",
        "What's the easiest way to find a public bathroom? Look up the IP address",
        // "A programming joke becomes a dad programming joke when it becomes apparent!",
        // "(I store all of my dad jokes in my dadabase)",
        // "I tried to tell a dad joke to a function. But it didn't get the reference.",
        "My team had a debate on what the best looping variable name is. i won",
        "Never ask a SQL dev to help you move furniture. They drop tables.",
        "If you're paid to code, you're a programmer. But if it's a hobby, are you just a grammer?",
        // "A GET request was reluctant to go the party. They had no body to go with.",
        "I got really angry and smashed my keyboard. I completely lost CTRL.",
        "We missed really great opportunity to call containerisation programs tupper-ware",
        "If you write Python, you know the road to hell is paved with good indentations",
        // "The local train station is converting their site from Ruby on Rails to a different web framework. I guess you could say it's being de-Railed",
        "Say what you want about SQL, but it brings a lot to the table.",
        "I don't trust Matlab developers. They're always plotting something.",
        // "Yesterday, I met someone from Australia who works in IT. I said, 'Do you come from a LAN down under?'",
        "I was bragging that I knew the hex code for every color, but then I forgot the one for blue. Yeah, that was a big 0000FF.",
        // "A new database query walks into a bar. The server says, 'Sorry, cache only.'",
        "Programmers aren't good endurance athletes. They work in sprints.",
        "Developing a web browser takes time. Chrome wasn't built in a day!",
        "I wanted to learn about computers so I took a Binary 101 class. It wasn't useful because it turned out to be the fifth class.",
        "Building a website is like baking brownies. They're best when they're pretty GUI",
        "I have a joke about documentation, but it's not done yet.",
        "I have a joke about macs, but it's not PC.",
    ],
    buttons: [
        {
            label: "GitHub",
            className: "button button-github",
            href: personalInfo.links.github,
        },
        {
            label: "LinkedIn",
            className: "button button-linkedin",
            href: personalInfo.links.linkedin,
        },
        {
            label: "E-Mail",
            className: "button ghost",
            href: `mailto:${personalInfo.email}`,
        },
    ],
};

export const aboutSpotlightConfig: SpotlightSectionConfig = {
    id: "about",
    title: "About",
    body: `
    I'm a Senior Software Engineer who believes the best engineering happens through deep technical debates and rigorous questioning of assumptions.
\n\nMy time at Hewlett Packard Enterprise taught me a lot about large-scale systems and enterprise environments, spanning operating systems, containerization, and orchestration with languages like C, Python and Go. Learning and innovating were at the heart of my work. Experimenting with proof-of-concepts, writing research papers, and refining policies became my main activities. I led a small experimental team and worked across teams and technical experts, becoming widely recognised as a voice for innovation. I also enjoyed mentoring junior engineers as they grew into emerging engineers; I learned as much from them as they did from me. Throughout, I remained committed to questioning assumptions and driving continuous improvement.
\n\nOutside of work, I enjoy exploring the breadth of computer science. This website and my GitHub are where I experiment with small projects for developers, diving into emerging areas like quantum computing.
    `,
    photoCarousel: {
        directory: "/about",
        intervalMs: 10000,
        prevLabel: "Previous image",
        nextLabel: "Next image",
    },
};

export const featuredConfig: FeaturedProjectsSectionConfig = {
    title: "Featured work",
    subtitle: "Curated projects that show the range of what I build and care about.",
    linkLabel: "View project",
    projects: [
        {
            name: "Campervan Conversion",
            description:
                "I've spent the last 3 years converting a 2016 Mercedes Sprinter into a fully functional campervan. See more below",
            stack: "Mercedes Sprinter",
            link: "#spotlight",
        },
        {
            name: "Hypha",
            description:
                "Hypha is a Rust CLI and VS Code extension for managing markdown notes with backlinks, tags, and metadata-based knowledge management.",
            stack: "Rust, Typescript",
            link: "https://github.com/battagel/hypha",
        },
        {
            name: "CV Website Redesign",
            description:
                "This website! A complete redesign and rebuild of my personal site with a cleaner, more modern aesthetic.",
            stack: "TypeScript, React, Radix UI",
            link: "#top",
        },
    ],
};

export const vanSpotlightConfig: SpotlightSectionConfig = {
    id: "spotlight",
    title: "Campervan Conversion",
    body: `
    Submitting my final university coursework brought a strange realization: I had achieved a major life goal, and for the first time, I had no project on the horizon. I needed a new challenge to immerse myself in a project that demanded progress and satisfied my passion for building and learning.
\n\nLiving in the South West, summers are spent on the coasts of Devon and Cornwall. I'd always watched the campervans lining the beaches, turning a tiring day of surfing or hiking into something much more enjoyable. Combining my hands-on skills with a drive for self-sustainability, I decided my next big project wouldn't be software - it would be a campervan conversion.
\n\nThis was no easy weekend project. After a month of planning, I purchased a 2016 Mercedes Sprinter in June 2023 and for the next twelve months, I spent three evenings a week and nearly every weekend on the build. Over the year I had invested roughly 1,000 hours into the project, with assistance from family and friends.
\n\nIn June 2024, exactly a year after it started, we officially launched the MVV (Minimum Viable Van) and she took her maiden drive on the 19th of June. However, work has continued for another 2 years with the many improvements both aesthetic and functional.
\n\nThe van has been an incredible learning experience, pushing me to acquire new skills in areas like carpentry, electrical work, and plumbing. It's also been a rewarding creative outlet that aligns with the same principles I value in software engineering.
    `,
    photoCarousel: {
        directory: "/van",
        intervalMs: 10000,
        prevLabel: "Previous image",
        nextLabel: "Next image",
    },
};

export const githubFeedConfig: GitHubFeedSectionConfig = {
    title: "Projects",
    subtitle: "Work on GitHub, sorted by language and recency.",
    allLabel: "All",
    loading: "Loading projects...",
    error: "Error loading repos",
    languageBadgeDefault: "Mixed",
    liveButtonLabel: "Live",
};

export const footerConfig: Omit<FooterSectionConfig, "email"> = {
    title: "Thank you for your valuable time!",
    body: "If you liked the website, please reach out - I'm always open to new opportunities and collaborations :)",
    copyright: `© ${new Date().getFullYear()} ${personalInfo.name}. All rights reserved.`,
    declaration: "Built with the assistance of AI tools.",
    links: [
        {
            label: "GitHub",
            href: personalInfo.links.github,
        },
        {
            label: "LinkedIn",
            href: personalInfo.links.linkedin,
        },
    ],
    note: `${personalInfo.name} — ${personalInfo.role} — ${personalInfo.location}`,
};