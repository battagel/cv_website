import { Group, Stack, Image, Text, Title, useMantineTheme } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

export default function InfoSection() {
    const theme = useMantineTheme();
    const images: string[] = ["img2.jpg", "img5.jpg", "img6.jpg", "img7.jpg", "img3.jpg"]

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
                    <Text>As a passionate software engineer currently working at Hewlett Packard Enterprise, I take great pride in creating effective solutions that impact our daily lives. I graduated from Cardiff University in 2023, where I achieved a first-grade undergraduate degree. Today, I continue to gain knowledge by experimenting with personal passion projects, such as this very website! Take a look below at the other interesting projects I have on my public Github.</Text>
                    <Text>This website contains a few additional features that you can try out, such as the ability to toggle between a light and dark color scheme. I hate light mode! Why not try customizing the title screen animation? Use the edit canvas button to change between different types of shapes, adjust the number of objects, or modify their speed and size.</Text>
                    <Text>In additon to my virtual projects, I am also in the process of converting a 2016 Mercedes Sprinter into a campervan. All my notes and documentation are available under my van project repository.</Text>
                </Stack>
            </Group>

        </Stack>
    )
}
