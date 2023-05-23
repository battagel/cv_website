import { Affix, Image, Group, Stack, Title, Text, Transition, rem } from "@mantine/core";
import { useEffect, useState } from "react";
import Canvas from "./canvas";
import ThemeButton from "./ThemeButton";

export default function TitleSection() {

    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        setLoaded(true)
    }, [])

    return (
        <Group position="center" style={{ width: "100%", height: "65vh", backgroundColor: "white" }}>
            <Transition mounted={loaded} transition="fade" duration={4000} timingFunction="ease">
                {(style) =>
                    <Group style={style}>
                        <Canvas style={{ width: "100%", height: "100%" }} />
                    </Group>
                }
            </Transition>
            <Affix position={{ top: rem(20), right: rem(20) }}>
                <ThemeButton style={{ position: "relative", top: "10px", right: "10px" }} />
            </Affix>
            <Transition mounted={loaded} transition="slide-up" duration={1500} timingFunction="ease">
                {(style) =>
                    <Group style={style}>
                        <Image maw={200} src="profile-pic.jpg" radius="xl" />
                        <Stack maw={500}>
                            <Title order={1}>Hi, I'm Matt...</Title>
                            <Text size="lg">I am a Junior Software Engineer with a passion for cool websites. Checkout some of my projects below.
                            </Text>
                        </Stack>
                    </Group>
                }
            </Transition>
        </Group >
    )
}
