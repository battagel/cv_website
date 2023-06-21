import { Group, Stack, Image, Text, Title, useMantineTheme } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

export default function InfoSection() {
    const theme = useMantineTheme();
    const images: string[] = ["img2.jpg", "img3.jpg"]

    return (
        <Stack id="info" align="center" justify="flex-start" style={{
            scrollMarginTop: "50px",
            width: "100%",
            height: "100%",
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
            borderBottomLeftRadius: "15px",
            borderBottomRightRadius: "15px"
        }}>
            <Group spacing="xl" grow>
                <Carousel p={20}
                    slideSize="70%"
                    styles={{
                        control: {
                            '&[data-inactive]': {
                                opacity: 0,
                                cursor: 'default',
                            },
                        },
                    }}
                    slideGap="md">
                    {images.map((image: string, index: number) => (
                        <Carousel.Slide key={index}>
                            <Image src={image} />
                        </Carousel.Slide>
                    ))}
                </Carousel>
                <Stack p={70}>
                    <Title>Welcome to my website!</Title>
                    <Text>As a passionate Software Engineer at Hewlett Packard Enterprise, I take great pride in creating effective solutions that impact our daily lives. My journey commenced when I graduated from Cardiff University in 2023, a milestone that laid a solid foundation for my career in programming and engineering. Today, I continue to immerse myself in the dynamic field of technology, motivated by the endless opportunities and challenges it presents.</Text>
                    <Text>When I'm not crafting code, you're likely to find me in the heart of community life, enjoying a lively pub trip with friends. These moments remind me of the value of companionship and shared stories, offering a well-rounded balance to my professional pursuits. At home, life is just as lively with my Labradoodle, Noodle, who never fails to brighten up my day. As I continue my journey, I look forward to the innovations and experiences that lie ahead, both in the field of software engineering and in the simple joys of everyday life.</Text>
                </Stack>
            </Group>

        </Stack>
    )
}
