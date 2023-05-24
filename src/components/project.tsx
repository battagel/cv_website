import { Text, Badge, Card, Group, Stack, useMantineTheme, Button } from "@mantine/core";

export type Project = {
    name: string;
    description: string;
    language: string;
    html_url: string;
    homepage: string;
};

const languageColorMap = new Map([
    ["python", "blue"],
    ["tex", "red"],
    ["go", "lightblue"],
    ["cpp", "green"],
]);

export function ProjectCard({
    name,
    description,
    language,
    html_url,
    homepage,
}: Project) {
    const theme = useMantineTheme();

    const secondaryColor =
        theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

    return (
        <div style={{ width: "100%", margin: "auto" }}>
            <Card shadow="sm" p="lg" m="xs" style={{ height: "260px" }}>
                <Stack justify="space-between">
                    <Group
                        position="apart"
                        style={{
                            marginBottom: 5,
                            marginTop: theme.spacing.sm,
                        }}
                    >
                        <Text weight={500}>{normaliseTitle(name)}</Text>
                        <Badge color={languageColorMap.get(language)} variant="light">
                            {language}
                        </Badge>
                    </Group>

                    <Text
                        size="sm"
                        style={{
                            color: secondaryColor,
                            lineHeight: 1.5,
                        }}
                    >
                        {description}
                    </Text>

                    <Button component="a" href={html_url} variant="light" fullWidth>
                        Visit GitHub
                    </Button>
                    {homepage && (
                        <Button
                            component="a"
                            href={homepage}
                            variant="light"
                            fullWidth
                            color="grape"
                        >
                            Visit Website
                        </Button>
                    )}
                </Stack>
            </Card>
        </div>
    );
}

const normaliseTitle = (name: string) => {
    let underscore_split: string[] = name.split("_")
    let words: string[] = []
    for (var i: number = 0; i < underscore_split.length; i++) {
        let hyphen_split: string[] = underscore_split[i].split("-")
        for (var j: number = 0; j < hyphen_split.length; j++) {
            words.push(hyphen_split[j])
        }
    }
    for (var i: number = 0; i < words.length; i++) {
        words[i] = capitalizeWord(words[i]);
    }
    return words.join(" ");
};

const capitalizeWord = (word: string) => {
    if (word === "cv") {
        // Rare exception
        return word.toUpperCase()
    }
    else if (word.length > 2) {
        return word.length ? word.charAt(0).toUpperCase() + word.slice(1) : word;
    }
    else {
        return word
    }
};
