import "./App.css";
import {
  AppShell,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import raw_projects from "./projects.json";
import { useEffect, useState } from "react";
import { useLocalStorageValue } from "@mantine/hooks";
import MyHeader from "./components/MyHeader";
import { ProjectType } from "myTypes";
import ProjectCards from "./components/ProjectCards";

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

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={{ colorScheme }}>
        <AppShell
          padding="md"
          header={<MyHeader />}
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          <ProjectCards projectList={projects} />
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
