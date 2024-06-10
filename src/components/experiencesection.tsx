import { Group, Grid, Stack, Timeline, Text, Title, useMantineTheme, useMantineColorScheme } from "@mantine/core";
import { Brain, Code, TestPipe } from "tabler-icons-react";

export default function ExperienceSection() {
    const theme = useMantineTheme();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";

    const iconSize = 18;
    const iconColor = "blue";

    return (
        <Stack id="experience" align="center" justify="flex-start" style={{
            gap: "0",
            scrollMarginTop: "50px",
            width: "100%",
            height: "100%",
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : 'rgba(252, 252, 252, 1)',
        }}>
            <Title m={20}>Experience</Title>
            <Group p={20} spacing="xl">
                <Grid style={{marginBottom: "10px"}}>
                    <Grid.Col p={0} span={2}></Grid.Col>
                    <Grid.Col p={0} span={8} m={0}>
                        <Timeline color="blue" active={1} bulletSize={36} lineWidth={3}>
                            <Timeline.Item bullet={<Code size={iconSize} />} color={iconColor} title="Hewlett Packard Enterprise">
                                <Text c="dimmed" size="sm">Delivering Software Defined Storage (SDS) block storage solutions for use within leading cloud providers.</Text>
                                <Text size="xs" mt={4}>March 2024 - Present</Text>
                            </Timeline.Item>
                            <Timeline.Item bullet={<Code size={iconSize} />} color={iconColor} title="Hewlett Packard Enterprise">
                                <Text c="dimmed" size="sm">Providing a solution for on-premises iSCSI data migration between differing hardware families</Text>
                                <Text size="xs" mt={4}>July 2023 - March 2024</Text>
                            </Timeline.Item>
                            <Timeline.Item bullet={<Brain size={iconSize} />} title="Cardiff University"  lineVariant="dashed">
                                <Text c="dimmed" size="sm">Graduated with First Class Honours in BSc Computer Science</Text>
                                <Text size="xs" mt={4}>2023</Text>
                            </Timeline.Item>
                            <Timeline.Item bullet={<TestPipe size={iconSize} />} title="Hewlett Packard Enterprise" lineVariant="dashed">
                                <Text c="dimmed" size="sm">Placement Year - QA Intern in data replication for primary block storage</Text>
                                <Text size="xs" mt={4}>2021 - 2022</Text>
                            </Timeline.Item>
                            <Timeline.Item bullet={<Brain size={iconSize} />} title="Cardiff Univerity">
                                <Text c="dimmed" size="sm">Started studying BSc Computer Science with a year in industry</Text>
                                <Text size="xs" mt={4}>2019 - 2021</Text>
                            </Timeline.Item>
                        </Timeline>
                    </Grid.Col>
                    <Grid.Col p={0} span={2}></Grid.Col>
                </Grid>
            </Group>
        </Stack>
    )
}
