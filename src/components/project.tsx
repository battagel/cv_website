import { Text, Badge, Card, Group, Stack, useMantineTheme, Button } from "@mantine/core";

export type Project = {
    name: string;
    description: string;
    language: string;
    html_url: string;
    homepage: string;
};

const languageColorMap: Map<string, [string, string]> = new Map([
    ["python", ["#3776AB", "#FFD43B"]],
    ["jupyter-notebook", ["#F37626", "#FF9633"]],
    ["javascript", ["#F7DF1E", "#DBAB09"]],
    ["typescript", ["#3178C6", "#255597"]],
    ["dockerfile", ["#0db7ed", "#094f6a"]],
    ["html", ["#E34F26", "#f06529"]],
    ["css", ["#1572B6", "#133f83"]],
    ["c++", ["#00599C", "#F34B7D"]],
    ["c", ["#555555", "#A8B9CC"]],
    ["c#", ["#9B4F96", "#763072"]],
    ["java", ["#007396", "#005570"]],
    ["kotlin", ["#0095D5", "#006fa1"]],
    ["swift", ["#FA7343", "#b55335"]],
    ["ruby", ["#CC342D", "#991B1B"]],
    ["php", ["#777BB4", "#595b8f"]],
    ["go", ["#00ADD8", "#007b9e"]],
    ["rust", ["#B7410E", "#8c3308"]],
    ["scala", ["#DC322F", "#a0252c"]],
    ["haskell", ["#5D4F85", "#FFD700"]],
    ["r", ["#276DC3", "#1d52a2"]],
    ["shell", ["#4EAA25", "#387619"]],
    ["powershell", ["#012456", "#012456"]],
    ["assembly", ["#6E4C13", "#523409"]],
    ["objective-c", ["#438EFF", "#3366CC"]],
    ["dart", ["#0175C2", "#014e8c"]],
    ["elixir", ["#4B275F", "#371a45"]],
    ["lua", ["#000080", "#00005a"]],
    ["perl", ["#0298C3", "#01748B"]],
    ["vim-script", ["#019733", "#016b25"]],
    ["freemarker", ["#005C5C", "#003f3f"]],
    ["makefile", ["#427819", "#325413"]],
    ["common-lisp", ["#3FB68B", "#2f896b"]],
    ["emacs lisp", ["#3F5FB9", "#2d45a1"]],
    ["tex", ["#002B36", "#001c24"]],
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

    const languageColorGradient = languageColorMap.get(language.toLowerCase());
    let col1: string = "green";
    let col2: string = "yellow";
    if (languageColorGradient) {
        [col1, col2] = languageColorGradient;
    }

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
                        <Badge gradient={{ from: col1, to: col2 }} variant="gradient">
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
