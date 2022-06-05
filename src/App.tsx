import "./App.css";
import {
  AppShell,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import { useState } from "react";
import { useLocalStorageValue } from "@mantine/hooks";
import MyHeader from "./components/MyHeader";
import ProjectCards from "./components/ProjectCards";
import MyNavbar from "./components/MyNavbar";
import ScrollAffix from "./components/ScrollAffix";

export default function App() {
  const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
  });

  function toggleColorScheme(value?: ColorScheme) {
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
    console.log(colorScheme);
  }

  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  const columnBreakpoints: number[] = [450, 800, 1100, 1390, 1600];

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme,
          other: { columnBreakpoints: columnBreakpoints },
        }}
      >
        {" "}
        <AppShell
          padding="md"
          header={
            <MyHeader setMenuOpened={setMenuOpened} menuOpened={menuOpened} />
          }
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
          navbar={
            <MyNavbar setMenuOpened={setMenuOpened} menuOpened={menuOpened} />
          }
        >
          <ProjectCards />
          <ScrollAffix />
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
