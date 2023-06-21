import { SimpleGrid, Stack, useMantineTheme } from "@mantine/core";

export default function FeaturedSection() {
    const theme = useMantineTheme();

    return (
        <Stack id="featured" align="center" justify="flex-start" style={{
            width: "100%",
            height: "100%",
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
            borderRadius: "15px",
        }}>
            <h1 style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                color: theme.colorScheme === 'dark' ? theme.white : theme.black
            }}>Featured Projects</h1>

            <SimpleGrid>
                <Stack>
                    <h1 style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: theme.colorScheme === 'dark' ? theme.white : theme.black
                    }}>Project 1</h1>
                    <p style={{
                        fontSize: "1rem",
                        fontWeight: "normal",
                        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.black
                    }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                </Stack>
                <Stack>
                    <h1 style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: theme.colorScheme === 'dark' ? theme.white : theme.black
                    }}>Project 2</h1>
                    <p style={{
                        fontSize: "1rem",
                        fontWeight: "normal",
                        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.black
                    }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                </Stack>
                <Stack>
                    <h1 style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: theme.colorScheme === 'dark' ? theme.white : theme.black
                    }}>Project 3</h1>
                    <p style={{
                        fontSize: "1rem",
                        fontWeight: "normal",
                        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.black
                    }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                </Stack>

            </SimpleGrid>
        </Stack>
    )
}
