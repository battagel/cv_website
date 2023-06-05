import {
    AppShell,
    ColorScheme,
    ColorSchemeProvider,
    MantineProvider,
} from "@mantine/core";
import { Grid, Stack } from "@mantine/core";
import ScrollAffix from "../components/ScrollAffix";
import ChatBot from "../components/Chatbot";
import ProjectSection from "../components/ProjectSection";
import InfoSection from "../components/InfoSection";
import Navbar from "../components/Navbar";
import TitleSection from "../components/TitleSection";
import { useLocalStorage } from "@mantine/hooks";

export default function Root() {
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: "mantine-color-scheme",
        defaultValue: "light",
    });

    function toggleColorScheme(value?: ColorScheme) {
        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
        console.log(colorScheme);
    }

    const columnBreakpoints: number[] = [450, 800, 1100, 1390, 1600];

    return (
        <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
        >
            <MantineProvider
                theme={{
                    globalStyles: (theme) => ({
                        '*, *::before, *::after': {
                            boxSizing: 'border-box',
                        },

                        body: {
                            ...theme.fn.fontStyles(),
                            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
                            color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
                            lineHeight: theme.lineHeight,
                        },
                    }),
                    components: {
                        Stack: {

                        },
                        Group: {

                        },
                        Button: {
                            defaultProps: {
                                variant: "light"
                            }
                        }
                    },
                    colorScheme,
                    other: { columnBreakpoints: columnBreakpoints },
                }}
            >
                {" "}
                <AppShell
                    padding="nil"
                    styles={(theme) => ({
                        main: {
                            backgroundColor:
                                theme.colorScheme === "dark"
                                    ? theme.colors.dark[8]
                                    : theme.colors.gray[0],
                        },
                    })}
                    navbarOffsetBreakpoint={columnBreakpoints[0]}
                    fixed
                >
                    <Stack justify="flex-start" spacing="nil">
                        <TitleSection />
                        <Navbar />
                        <Grid>
                            <Grid.Col span={1}></Grid.Col>
                            <Grid.Col span={10}>
                                <InfoSection />
                            </Grid.Col>
                            <Grid.Col span={1}></Grid.Col>
                            {/* <Grid.Col span={1}></Grid.Col>
                                <Grid.Col span={10}>
                                <FeaturedSection />
                                </Grid.Col>
                                <Grid.Col span={1}></Grid.Col> */}
                            <Grid.Col span={1}></Grid.Col>
                            <Grid.Col span={10}>
                                <ProjectSection />
                            </Grid.Col>
                            <Grid.Col span={1}></Grid.Col>
                        </Grid>
                    </Stack>
                    <ChatBot />
                    <ScrollAffix />

                </AppShell>
            </MantineProvider>
        </ColorSchemeProvider >
    );
}
