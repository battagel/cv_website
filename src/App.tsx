import "./App.css";
import {
  AppShell,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  useMantineTheme,
} from "@mantine/core";
import raw_projects from "./projects.json";
import { useEffect, useState } from "react";
import { useLocalStorageValue } from "@mantine/hooks";
import MyHeader from "./components/MyHeader";
import { ProjectType } from "myTypes";
import ProjectCards from "./components/ProjectCards";
import MyNavbar from "./components/MyNavbar";
import ScrollAffix from "./components/ScrollAffix";

export default function App() {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    setProjects(raw_projects.projects);
  }, []);

  const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
  });

  function toggleColorScheme(value?: ColorScheme) {
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
    console.log(colorScheme);
  }

  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  const columnBreakpoints: number[] = [650, 1200, 1590, 1800];

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
          navbarOffsetBreakpoint={650}
          fixed
          navbar={
            <MyNavbar setMenuOpened={setMenuOpened} menuOpened={menuOpened} />
          }
        >
          <ProjectCards projectList={projects} />
          <ScrollAffix />
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
