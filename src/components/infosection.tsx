import { UnstyledButton, Group, Stack, Image, Text, Title, useMantineTheme, useMantineColorScheme } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { smoothScrollTo } from "./utils";

export default function InfoSection() {
    const theme = useMantineTheme();
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";
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
                    <Title>A little more detail...</Title>

                    <Text>
                        I have a passion for exploring both modern and complex technologies and have intermediate skills in C, Golang, and Python, with experience
                        in various other languages as well. I'm enthusiastic about tinkering and frequently engage in personal projects aimed at optimizing developer
                        workflows and enhancing user experiences in applications.
                    </Text>
                    <Text>
                        I'm currently a Software Engineer at <a href="https://www.hpe.com/us/en/home.html" style={{ color: "#01A982", textDecoration: "none" }}>Hewlett Packard Enterprise</a>, specializing
        in developing <a href="https://www.hpe.com/emea_europe/en/what-is/block-storage.html" style={{ color: "#01A982", textDecoration: "none" }}>block storage</a> solutions for a diverse
        range of enterprise partners. My journey with HPE began in 2021 where I started in QA as a prt of my industrial placement year. I continued working during my
        final year at university and after graduating moved into a development position.
                    </Text>

                    <Text>
                        I graduated from <a href="https://cardiff.ac.uk" style={{ color: "#d3374a", textDecoration: "none" }}>Cardiff University</a> in 2023, where I achieved a first-class honors
                        undergraduate degree in Computer Science. Today, I continue to gain knowledge by
                        experimenting with personal passion projects, such as this very website. Why not
                        take a look below at the other interesting projects I have on my public <a href="https://github.com/battagel" style={{ color: theme.colors.indigo[8], textDecoration: "none" }}>GitHub</a> or in the <UnstyledButton onClick={() => smoothScrollTo('projects')} style={{ color: theme.colors.grape[8] }}>projects section</UnstyledButton> below?
                    </Text>
                    {/* <Text>
                        In additon to my tech related projects, I am also in the process of converting a
                        2016 Mercedes Sprinter into a campervan. Checkout it out in my featured section.
                        </Text> */}
                </Stack>
            </Group>

        </Stack>
    )
}
