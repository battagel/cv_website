import {
  Burger,
  Header,
  MediaQuery,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { MenuOpenedProps } from "myTypes";
import ThemeButton from "./ThemeButton";

export default function MyHeader({
  menuOpened,
  setMenuOpened,
}: MenuOpenedProps) {
  const theme = useMantineTheme();
  return (
    <Header height={300} p="md">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <MediaQuery largerThan="md" styles={{ display: "none" }}>
          <Burger
            opened={menuOpened}
            onClick={() => setMenuOpened((o: boolean) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
        <Title
          sx={(theme) => ({
            color:
              theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
          })}
        >
          Hi, Im Matt...
        </Title>

        <ThemeButton />
      </div>
    </Header>
  );
}
