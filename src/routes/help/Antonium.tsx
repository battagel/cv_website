import { Text, Title, Button, List, Stack } from '@mantine/core';

export default function Antonium() {
    return (
        <Stack>
            <Title>Antonium</Title>
            <Text>You can find the source code for this extension on <a href="https://github.com/battagel/antonium">GitHub</a></Text>

            <Title order={2}>Usage</Title>
            <Text>Antonium is designed to highlight abbreviations and technical jargon a various websites. On hovering, a tooltip will appear giving information about the possible meaning of the word or abbreviation. Links will be provided to give additional context.</Text>

            <Title order={2}>Credits</Title>
            <Text>This extension was made by Matthew Battagel</Text>
        </Stack >
    );
}
