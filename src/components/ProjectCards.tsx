import {
  Badge,
  Button,
  Card,
  Group,
  SimpleGrid,
  useMantineTheme,
  Text,
  Skeleton,
  Space,
} from "@mantine/core";
import { ProjectType } from "myTypes";
import { useEffect, useState } from "react";

export default function ProjectCards() {
  const theme = useMantineTheme();

  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  useEffect(() => {
    fetch("https://api.github.com/users/battagel/repos")
      .then((res) => res.json())
      .then(
        (result: any) => {
          console.log(result);
          var tempProjectList: ProjectType[] = [];
          //sleep(100);
          result.map((project: any) => {
            const { name, description, language, html_url, ...theRest } =
              project;
            const subset: ProjectType = {
              name,
              description,
              language,
              html_url,
            };
            tempProjectList = [...tempProjectList, subset];
          });
          setProjects(tempProjectList);
          setLoaded(true);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);
  console.log(loaded);

  return (
    <SimpleGrid
      cols={5}
      spacing="lg"
      breakpoints={[
        { maxWidth: theme.other.columnBreakpoints[4], cols: 4, spacing: "sm" },
        { maxWidth: theme.other.columnBreakpoints[3], cols: 3, spacing: "sm" },
        { maxWidth: theme.other.columnBreakpoints[2], cols: 2, spacing: "sm" },
        { maxWidth: theme.other.columnBreakpoints[1], cols: 1, spacing: "sm" },
      ]}
    >
      {loaded === false && (
        <>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </>
      )}
      {projects.map((project: ProjectType) => {
        return <ProjectCard key={project.name} {...project} />;
      })}
    </SimpleGrid>
  );
}

function sleep(milliseconds: number) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function ProjectCard({ name, description, language, html_url }: ProjectType) {
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
          <Text weight={500}>{name}</Text>
          <Badge color="pink" variant="light">
            {language}
          </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          {description}
        </Text>

        <Button
          component="a"
          href={html_url}
          variant="light"
          fullWidth
          style={{ marginTop: 14 }}
        >
          Click me
        </Button>
      </Card>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Card shadow="sm" p="lg" m="xs">
        <Group position="apart" style={{ marginTop: "15px" }}>
          <Skeleton height={18} width={150}></Skeleton>
          <Skeleton
            height={18}
            width={70}
            style={{ float: "right" }}
          ></Skeleton>
        </Group>
        <div style={{ marginTop: "15px", marginBottom: "15px" }}>
          <Skeleton height={35}></Skeleton>
        </div>
        <Skeleton height={36}></Skeleton>
      </Card>
    </div>
  );
}
