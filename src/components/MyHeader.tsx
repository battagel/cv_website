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
    <Header height={60} p="md">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={menuOpened}
            onClick={() => setMenuOpened((o: boolean) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
        <Text
          sx={(theme) => ({
            color:
              theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
          })}
        >
          Matthew Battagel
        </Text>
        <div style={{}}>
          <ThemeButton />
        </div>
      </div>
    </Header>
  );
}
