import { Text, Grid, Group, Stack, Title, List } from "@mantine/core";

export default function FooterSection() {

    return (
        <Stack sx={(theme) => ({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[1],
        })}>

            <Grid>
                <Grid.Col span={1}></Grid.Col>
                <Grid.Col span={10} style={{ color: "gray" }}>
                    <Group p="xl" position="apart">
                        <Stack>
                            <Text>
                                Website lovingly crafted by Matthew Battagel
                            </Text>
                            <Text style={{ width: "70%" }}>
                                Thank you for visiting my website.
                                Please feel free to contact me if you have any questions or opportunities.
                            </Text>
                        </Stack>
                        <Stack>
                            <Text p="xs">Tools used:</Text>
                            <List size="sm" style={{ color: "gray" }}>
                                <List.Item>Mantine UI Library</List.Item>
                                <List.Item>React</List.Item>
                                <List.Item>Yarn</List.Item>
                            </List>
                        </Stack>
                    </Group>
                </Grid.Col>
                <Grid.Col span={1}></Grid.Col>
            </Grid>
        </Stack>
    )
}
