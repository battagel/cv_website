import { Text, Image, SimpleGrid, Stack, Title, Button, Group, Card, Badge } from "@mantine/core";

const data = [
    {
        title: "Antonium",
        image: "antonium-logo.png",
        description: "A browser extension for explaining jargon and abbreviations.",
        badge: "v3.2.0",
        href: "/#/help/antonium",
    },
];

export default function Dashboard() {

    const cards = data.map((card, index) => (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    src={card.image}
                    height={180}
                    alt="Norway"
                />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>
                    {card.title}
                </Text>
                <Badge color="green" variant="light">
                    {card.badge}
                </Badge>
            </Group>

            <Text size="sm" color="dimmed">
                {card.description}
            </Text>

            <Button component="a" href={card.href} variant="light" color="blue" fullWidth mt="md" radius="md">
                View Documentation
            </Button>
        </Card>
    ));

    return (
        <Stack>
            <Title>Dashboard</Title>
            <Text>Available documentation pages:</Text>

            <SimpleGrid
                spacing="xl"
                verticalSpacing="xl"
                cols={5}
                breakpoints={[
                    { maxWidth: '62rem', cols: 3, spacing: 'md' },
                    { maxWidth: '48rem', cols: 2, spacing: 'sm' },
                    { maxWidth: '36rem', cols: 1, spacing: 'sm' },
                ]}
            >
                {cards}
            </SimpleGrid>
        </Stack >
    )
}
