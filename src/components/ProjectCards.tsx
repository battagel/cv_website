import { Paper, Center, SimpleGrid } from "@mantine/core";
import { ProjectInt, ProjectType } from "myTypes";
import ProjectCard from "./ProjectCard";

export default function ProjectCards({projectList}: ProjectInt) {
  return (
    <Paper radius={0} style={{ minHeight: "100vh" }}>
      <Center>
        <SimpleGrid cols={2} spacing="md">
          {projectList.map((project: ProjectType) => {
            console.log(project)
            return (
              <ProjectCard {...project}/>
            )})}
        </SimpleGrid>
      </Center>
    </Paper>
  );
}
