import {
  Paper,
  Group,
  Navbar,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineTheme,
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
  const theme = useMantineTheme();
  return (
    <Navbar
      p="sm"
      hiddenBreakpoint={theme.other.columnBreakpoints[0]}
      hidden={!menuOpened}
      width={{ base: 175 }}
    >
      <NavHeading text="My Social Links" />
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

interface NavHeadingProps {
  text: string;
}

function NavHeading({ text }: NavHeadingProps) {
  return (
    <Paper
      style={{
        width: "95%",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "10px",
      }}
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark" ? "#244E79" : theme.colors.blue[0],
      })}
    >
      <Text
        size="md"
        style={{ marginLeft: "10px", marginRight: "10px" }}
        sx={(theme) => ({
          color:
            theme.colorScheme === "dark"
              ? theme.colors.blue[1]
              : theme.colors.blue[6],
        })}
      >
        {text}
      </Text>
    </Paper>
  );
}
