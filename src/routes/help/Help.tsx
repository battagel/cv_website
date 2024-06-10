import { AppShell, ColorScheme, ColorSchemeProvider, MantineProvider} from "@mantine/core";
import NavbarSection from "./navbar";
import { Outlet } from "react-router-dom";
import { useLocalStorage } from "@mantine/hooks";

export default function Help() {

    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: "mantine-color-scheme",
        defaultValue: "light",
    });

    function toggleColorScheme(value?: ColorScheme) {
        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
        console.log(colorScheme);
    }
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
                        Button: {
                            defaultProps: {
                                variant: "light"
                            }
                        }
                    },
                    colorScheme,
                }}
            >
                <AppShell
                    navbar={<NavbarSection />}
                    fixed
                >
                    <Outlet />
                </AppShell>
            </MantineProvider>
        </ColorSchemeProvider>
    );
}
