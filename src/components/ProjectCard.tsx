import {
  Card,
  Group,
  Badge,
  Button,
  Text,
  Image,
  useMantineTheme,
} from "@mantine/core";
import { ProjectType } from "myTypes";

export default function ProjectCard({title, desc, button_colour, button_text, badge_colour, badge}: ProjectType) {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <div style={{ width: 340, margin: "auto" }}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src="./image.png" height={160} alt="Image" />
        </Card.Section>

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
