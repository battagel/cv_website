import {
  Badge,
  Button,
  Card,
  Group,
  SimpleGrid,
  useMantineTheme,
  Text,
  Image,
} from "@mantine/core";
import { ProjectInt, ProjectType } from "myTypes";

export default function ProjectCards({ projectList }: ProjectInt) {
  const theme = useMantineTheme();
  return (
    <SimpleGrid
      cols={5}
      spacing="lg"
      breakpoints={[
        { maxWidth: theme.other.columnBreakpoints[3], cols: 4, spacing: "sm" },
        { maxWidth: theme.other.columnBreakpoints[2], cols: 3, spacing: "sm" },
        { maxWidth: theme.other.columnBreakpoints[1], cols: 2, spacing: "sm" },
        { maxWidth: theme.other.columnBreakpoints[0], cols: 1, spacing: "sm" },
      ]}
    >
      {projectList.map((project: ProjectType) => {
        return <ProjectCard key={project.title} {...project} />;
      })}
    </SimpleGrid>
  );
}

function ProjectCard({
  title,
  desc,
  button_colour,
  button_text,
  badge_colour,
  badge,
}: ProjectType) {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Card shadow="sm" p="lg" m="xs">
        {/*<Card.Section>*/}
        {/*<Image src="./image.png" height={160} alt="Image" />*/}
        {/*</Card.Section>*/}

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Text weight={500}>{title}</Text>
          <Badge color={badge_colour} variant="light">
            {badge}
          </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          {desc}
        </Text>

        <Button
          variant="light"
          color={button_colour}
          fullWidth
          style={{ marginTop: 14 }}
        >
          {button_text}
        </Button>
      </Card>
    </div>
  );
}
