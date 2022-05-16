import {
  Container,
  Group,
  Navbar,
  Paper,
  Text,
  ThemeIcon,
  UnstyledButton,
} from "@mantine/core";
import { MenuOpenedProps } from "myTypes";
import { BrandGithub, BrandLinkedin } from "tabler-icons-react";

interface MainLinkProps {
  text: string;
  link: string;
  icon: React.ReactNode;
  color: string;
}

export default function MyNavbar({ menuOpened }: MenuOpenedProps) {
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!menuOpened}
      width={{ sm: 200 }}
    >
      <Container
        style={{ width: "85%" }}
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[9]
              : theme.colors.gray[0],
        })}
      >
        <Text
          sx={(theme) => ({
            color:
              theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
          })}
        >
          Hi, Im Matt...
        </Text>
      </Container>
      <MyNavLink
        text="GitHub"
        link="https://www.github.com/battagel"
        icon={<BrandGithub size={20} />}
        color="grey"
      />
      <MyNavLink
        text="LinkedIn"
        link="https://www.linkedin.com/in/matthewbattagel"
        icon={<BrandLinkedin size={20} />}
        color="blue"
      />
    </Navbar>
  );
}

function MyNavLink({ text, link, icon, color }: MainLinkProps) {
  return (
    <Navbar.Section>
      <UnstyledButton
        sx={(theme) => ({
          display: "block",
          width: "85%",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        })}
        component="a"
        href={link}
      >
        <Group>
          <ThemeIcon color={color} variant="light">
            {icon}
          </ThemeIcon>
          <Text size="md">{text}</Text>
        </Group>
      </UnstyledButton>
    </Navbar.Section>
  );
}
