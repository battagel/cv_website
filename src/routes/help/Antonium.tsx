import { Text, Title, Stack, Anchor } from '@mantine/core';

export default function Antonium() {
    return (
        <Stack>
            <Title>Antonium</Title>
            <Text>A software engineer's browser integrated guide to industry related words, acronyms and abbreviations.</Text>
            <Text>Antonium is a browser extension that overlays jargon with a tooltip that gives you more information without having to leave the page. Antonium collects from trusted sources to create a unified database of definitions to help software engineers better understand the content they consume.</Text>

            <Text>You can find the source code for this extension on <Anchor href="https://github.com/battagel/antonium">GitHub</Anchor></Text>

            <Title order={2}>Installation</Title>
            <Text>Antonium can be installed using the releases available. Pick the appropriate release based on browser compatibility.</Text>
            <Text>Installation steps:</Text>
            <ol>
                <li>Download the latest release for your browser</li>
                <li>Navigate to the extensions section in Chrome by entering `chrome://extensions` in the address bar.</li>
                <li>Enable developer mode.</li>
                <li>Click on "Load unpacked".</li>
                <li>Navigate to the repository's "dist" folder and select it.</li>
                <li>Antonium should load. Make sure it is enabled in the extensions list.</li>
            </ol>

            <Title order={2}>Usage</Title>
            <Text>Antonium is designed to highlight abbreviations and technical jargon a various websites. On hovering, a tooltip will appear giving information about the possible meaning of the word or abbreviation.</Text>
            <ol>
                <li>Pin Antonium to your extension bar (the jigsaw puzzle piece icon in the top right corner).</li>
                <li>Select one or more of the available categories.</li>
                <li>The page will automatically reload to apply the changes.</li>
                <li>Hover over any jargon or abbreviation to see its definition.</li>
            </ol>
            <Text>All options are saved automatically. To disable Antonium, simply deselect all categories.</Text>
            <Text>Note: Antonium is restricted to run on certain websites such as, Confluence and Stack Overflow.</Text>

            <Title order={2}>Design</Title>
            <Text>Antonium is comprised of multiple sections each with their individual responsibilities.</Text>

            <Title order={4}> UI</Title>
            <Text>Uses react to create the popup (when clicking Antonium icon) in combination with the Mantine.js UI library. Tooltips are created with basic HTML techniques</Text>

            <Title order={4}> Collecting </Title>
            <Text>Uses a abstract factory methods to create multiple concrete scrapers based on
                the abstract scraper class. For every working url provided by the contentscript,
                the collector will create a concrete scraper for that url to collect the data.</Text>

            <Title order={4}> Data </Title>
            <Text>The data is handled by a data model where all data is contained within a hash
                map. Helper functions are provided to access the data.</Text>

            <Title order={4}> Database</Title>
            <Text>Using Dexie.js, bulk puts and gets can be used to speed up reloading the page on
                the same domain.</Text>

            <Title order={4}> Processing </Title>
            <Text>Page processor locates the words on a page and then the html processor edits the
                html to include the tooltips when a positive result for a word is found.</Text>

            <Title order={2}>Credits</Title>
            <Text>This extension was made by Matthew Battagel</Text>
        </Stack >
    );
}
