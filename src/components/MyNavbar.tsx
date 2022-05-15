import {
  Anchor,
  Group,
  Navbar,
  Text,
  ThemeIcon,
  UnstyledButton,
} from "@mantine/core";
import { MenuOpenedProps } from "myTypes";
import {
  GitPullRequest,
  AlertCircle,
  Messages,
  Database,
  Link,
} from "tabler-icons-react";

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
      <MyNavLink
        text="GitHub"
        link="https://www.github.com/battagel"
        icon={<GitPullRequest size={16} />}
        color="Blue"
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
          width: "100%",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

          "&:hover": {
            backgroundColom:
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
          <Text size="sm">{text}</Text>
        </Group>
      </UnstyledButton>
    </Navbar.Section>
  );
}
