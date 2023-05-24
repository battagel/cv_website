import { Text, Button, Group, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { Archive, BrandGithub, BrandLinkedin, InfoSquare } from "tabler-icons-react";

export default function Navbar() {
    const theme = useMantineTheme();
    const [active, setActive] = useState(1);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

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
                <Stepper.Step label="First step" description="Create an account">
                </Stepper.Step>
                <Stepper.Step label="Second step" description="Verify email">
                </Stepper.Step>
                <Stepper.Step label="Final step" description="Get full access">
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
                    component="a"
                    radius="xl"
                    href="#info"
                    leftIcon={<InfoSquare size={20} />}>
                    Info
                </Button>
                <Button color="blue"
                    variant={theme.colorScheme === 'dark' ? "light" : "white"}
                    component="a"
                    radius="xl"
                    href="#experience"
                    disabled
                    leftIcon={<InfoSquare size={20} />}>
                    Experience
                </Button>
                <Button color="blue"
                    variant={theme.colorScheme === 'dark' ? "light" : "white"}
                    component="a"
                    radius="xl"
                    href="#projects"
                    leftIcon={<Archive size={20} />}>
                    Projects
                </Button>
            </Button.Group>
            <Text color={theme.colorScheme === 'dark' ? "black" : "white"}>|</Text>
            <Button variant="gradient"
                gradient={{ from: 'black', to: 'indigo' }}
                component="a"
                radius="xl"
                href="https://www.github.com/battagel"
                leftIcon={<BrandGithub size={20} />}>
                Github
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
