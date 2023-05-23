import { Stack, Text, Title } from "@mantine/core";

export default function InfoSection() {

    return (
        <Stack align="center" justify="flex-start" style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
            <Title>Welcome to my website!</Title>
            <Text>THis website was created to display all of my current and completed projects. Have a browse below to check out what cool stuff I have been working on.</Text>
            <Text>You can even chat to my AI assistant and ask questions about my work.</Text>
        </Stack>
    )
}
