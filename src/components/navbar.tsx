import { Text, Button, Group, useMantineTheme } from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
import { Archive, ArrowAutofitUp, Brain, BrandGithub, BrandLinkedin, InfoSquare, Mail, Notebook, Star } from "tabler-icons-react";

export default function Navbar() {
    const theme = useMantineTheme();

    // TODO: Can be replaced with useScrollIntoView hook
    const smoothScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <Group position="center" p={7} style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[3],
            borderBottomLeftRadius: "25px",
            borderBottomRightRadius: "25px"
        }}>
            {/* <Stepper active={active} onStepClick={setActive} breakpoint="sm">
                <Stepper.Step label="Title">
                </Stepper.Step>
                <Stepper.Step label="Info">
                </Stepper.Step>
                <Stepper.Step label="Experience">
                </Stepper.Step>
                <Stepper.Step label="Projects">
                </Stepper.Step>
                <Stepper.Completed>
                </Stepper.Completed>
                </Stepper>
                <Group position="center" mt="xl">
                <Button variant="default" onClick={prevStep}>Back</Button>
                <Button onClick={nextStep}>Next step</Button>
                </Group> */}
            <Button.Group>
                <Button color="blue"
                    variant={theme.colorScheme === 'dark' ? "light" : "white"}
                    component="button"
                    radius="xl"
                    onClick={() => smoothScrollTo('title')}
                    leftIcon={<ArrowAutofitUp size={20} />}>
                    Top
                </Button>
                <Button color="blue"
                    variant={theme.colorScheme === 'dark' ? "light" : "white"}
                    component="button"
                    radius="xl"
                    onClick={() => smoothScrollTo('info')}
                    leftIcon={<InfoSquare size={20} />}>
                    Info
                </Button>
                <Button color="blue"
                    variant={theme.colorScheme === 'dark' ? "light" : "white"}
                    component="button"
                    radius="xl"
                    onClick={() => smoothScrollTo('experience')}
                    disabled
                    leftIcon={<Brain size={20} />}>
                    Experience
                </Button>
                <Button color="blue"
                    variant={theme.colorScheme === 'dark' ? "light" : "white"}
                    component="button"
                    radius="xl"
                    onClick={() => smoothScrollTo('experience')}
                    disabled
                    leftIcon={<Star size={20} />}>
                    Featured
                </Button>
                <Button color="blue"
                    variant={theme.colorScheme === 'dark' ? "light" : "white"}
                    component="button"
                    radius="xl"
                    onClick={() => smoothScrollTo('projects')}
                    leftIcon={<Archive size={20} />}>
                    Projects
                </Button>
            </Button.Group>
            <Button color="blue"
                variant={theme.colorScheme === 'dark' ? "light" : "white"}
                component="a"
                href="/#/help"
                radius="xl"
                leftIcon={<Notebook size={20} />}>
                Documentation
            </Button>
            <Text color={theme.colorScheme === 'dark' ? "black" : "white"}>|</Text>
            <Button variant="gradient"
                gradient={{ from: 'black', to: theme.colors.indigo[9] }}
                component="a"
                radius="xl"
                href="https://www.github.com/battagel"
                leftIcon={<BrandGithub size={20} />}>
                Github
            </Button>
            <Button variant="gradient"
                gradient={{ from: 'pink', to: 'violet' }}
                component="a"
                radius="xl"
                href="mailto:matthew@battagel.me.uk"
                leftIcon={<Mail size={20} />}>
                E-Mail
            </Button>
            <Button variant="gradient" gradient={{ from: 'blue', to: theme.colors.blue[8], deg: 90 }}
                component="a"
                radius="xl"
                href="https://www.linkedin.com/in/matthewbattagel"
                leftIcon={<BrandLinkedin size={20} />}>
                LinkedIn
            </Button>
        </Group >
    )
}
