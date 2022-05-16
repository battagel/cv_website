import {
  Burger,
  Header,
  MediaQuery,
  Title,
  Image,
  useMantineTheme,
  Center,
} from "@mantine/core";
import { MenuOpenedProps } from "myTypes";
import ThemeButton from "./ThemeButton";

export default function MyHeader({
  menuOpened,
  setMenuOpened,
}: MenuOpenedProps) {
  const theme = useMantineTheme();
  return (
    <Header height={200} p="md">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        <MediaQuery
          smallerThan={theme.other.columnBreakpoints[0]}
          styles={{ display: "none" }}
        >
          <div style={{ marginLeft: 17, marginRight: 17 }}>
            <Image
              radius="lg"
              width={150}
              height={150}
              src="/profile-pic.jpg"
              alt="Random unsplash image"
            />
          </div>
        </MediaQuery>
        <MediaQuery
          largerThan={theme.other.columnBreakpoints[0]}
          styles={{ display: "none" }}
        >
          <Burger
            opened={menuOpened}
            onClick={() => setMenuOpened((o: boolean) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
        <div style={{ flex: 1 }}>
          <Title
            order={1}
            sx={(theme) => ({
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[0]
                  : theme.black,
            })}
          >
            <Center>Hi, Im Matt...</Center>
          </Title>
        </div>
        <ThemeButton />
      </div>
    </Header>
  );
}
