import {
  Image,
  Grid,
  Group,
  Title,
  Spoiler,
  Text,
  Stack,
  useMantineTheme,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";

export default function FeaturedSection() {
    const theme = useMantineTheme();

    const images: string[] = ["van.jpg", "van2.jpg", "van3.jpg"]

    return (
        <Stack
            id="featured"
            align="center"
            justify="flex-start"
            style={{
                gap: "0",
                width: "100%",
                height: "100%",
                backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
                borderRadius: "15px",
            }}
        >
            <Title m={20}>Featured Projects</Title>
            <Group p={20} spacing="xl">
                <Grid>
                    <Grid.Col p={0} span={1}></Grid.Col>
                    <Grid.Col p={0} span={10} m={0}>
                        <Spoiler
                            maxHeight={150}
                            showLabel="Show more"
                            hideLabel="Hide"
                            transitionDuration={200}
                        >
                            <Group grow align="top">
                                <Stack>
                                    <Text>
                                        After submitting the final coursework of my last year at university, I was hit with the reality of achieving a major life goal. As someone who thrives on passion and perpetual projects, the idea of being without one was daunting. I needed something new to immerse myself in, a challenge to satisfy my constant desire for creation and progress. That’s when I began exploring what my next big project could be.
                                    </Text>
                                    <Text>
                                        As I live in the South West, taking a small trip South to the coasts of Devon and Cornwall have always been an enjoyable part of my life, with most summers spent visiting a few times a year. On these trips there is always a plethora of campervans lining the upper banks of the beaches that make a tiring activity much more bareable. This combined with hands on skills and urge to be self sustainable, I decided to convert a van into a campervan.
                                    </Text>
                                    <Text>
                                        This was no easy weekend project. After a month of planning, I finally purchased the van in June 2023. The van is a 2016 Mercedes Sprinter with a high roof and long wheel base. All through summer 2023 to the following summer in 2024 I worked around 3 evenings a week and most weekends on the van. Combined I calcualted this to be roughly 1500 hours of my own time (excluding time spent to research and purchase parts and materials). What I have so far failed to mention is the monumental help I have had from both my parents who combined probably put in another 1500 hours of their own time into the project.
                                    </Text>
                                    <Text>
                                        A year later, in June 2024 I finally had a <strong>MVV</strong> (Minimal Viable Van) that was ready to be insured and used. She was taken on her maiden drive on the 19th of June 2024.
                                    </Text>
                                </Stack>
                                <Group>
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
                                </Group>
                            </Group>
                            {/* <Text>
                                Full line
                                </Text> */}
                        </Spoiler>
                    </Grid.Col>
                    <Grid.Col p={0} span={1}></Grid.Col>
                </Grid>
            </Group>
        </Stack>
    );
}
