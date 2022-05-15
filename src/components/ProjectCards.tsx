import { SimpleGrid } from "@mantine/core";
import { ProjectInt, ProjectType } from "myTypes";
import ProjectCard from "./ProjectCard";

export default function ProjectCards({ projectList }: ProjectInt) {
  return (
    <SimpleGrid
      cols={5}
      spacing="lg"
      breakpoints={[
        { maxWidth: 2100, cols: 4, spacing: "sm" },
        { maxWidth: 1890, cols: 3, spacing: "sm" },
        { maxWidth: 1400, cols: 2, spacing: "sm" },
        { maxWidth: 950, cols: 1, spacing: "sm" },
      ]}
    >
      {projectList.map((project: ProjectType) => {
        console.log(project);
        return <ProjectCard {...project} />;
      })}
    </SimpleGrid>
  );
}
