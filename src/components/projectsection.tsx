import {
    Card,
    Group,
    SimpleGrid,
    useMantineTheme,
    Skeleton,
} from "@mantine/core";
import { ProjectCard, Project } from "./project";
import { useEffect, useState } from "react";


export default function ProjectCards() {
    const theme = useMantineTheme();

    const [projects, setProjects] = useState<Project[]>([]);
    const [starred, setStarred] = useState<Project[]>([]);
    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        fetch("https://api.github.com/users/battagel/repos")
            .then((res) => res.json())
            .then(
                (result: any) => {
                    console.log(result);
                    var tempProjectList: Project[] = [];
                    //sleep(100);
                    result.map((project: any) => {
                        const {
                            name,
                            description,
                            language,
                            html_url,
                            homepage,
                            ...theRest
                        } = project;
                        const subset: Project = {
                            name,
                            description,
                            language,
                            html_url,
                            homepage,
                        };
                        tempProjectList = [...tempProjectList, subset];
                    });
                    setProjects(tempProjectList);
                },
                (error) => {
                    console.log(error);
                }
            );
        fetch("https://api.github.com/users/battagel/starred")
            .then((res) => res.json())
            .then((result: any) => {
                console.log(result);
                var tempProjectList: Project[] = [];
                console.log(tempProjectList);
                //sleep(100);
                result.map((project: any) => {
                    const {
                        name,
                        description,
                        language,
                        html_url,
                        homepage,
                        ...theRest
                    } = project;
                    const subset: Project = {
                        name,
                        description,
                        language,
                        html_url,
                        homepage,
                    };
                    tempProjectList = [...tempProjectList, subset];
                });
                setStarred(tempProjectList);
                setLoaded(true);
            });
    }, []);

    const combined_projects: Project[] = [...projects, ...starred];
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
            {combined_projects.map((project: Project) => {
                return <ProjectCard key={project.name} {...project} />;
            })}
        </SimpleGrid>
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
