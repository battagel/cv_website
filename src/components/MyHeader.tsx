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
    <Header
      height={175}
      p={0}
      sx={(theme) => ({
        "@media (max-width: 950px)": {
          height: "150px",
        },
      })}
    >
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
          <div style={{ width: 175 }}>
            <Center>
              <Image
                withPlaceholder={true}
                radius="xl"
                width={128}
                height={128}
                src="profile-pic.jpg"
                alt="Profile Picture"
              />
            </Center>
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
            sx={(theme) => ({
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[0]
                  : theme.black,
              fontSize: "clamp(30px, 10vw, 60px)",
              fontFamily: "Noto Serif",
            })}
          >
            <Center>Hi, Im Matt...</Center>
          </Title>
        </div>
        <div
          style={{
            alignSelf: "flex-start",
            marginRight: "20px",
            marginTop: "20px",
          }}
        >
          <ThemeButton />
        </div>
      </div>
    </Header>
  );
}
