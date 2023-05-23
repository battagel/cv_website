import { Button, Group, useMantineTheme } from "@mantine/core";
import { BrandGithub, BrandLinkedin } from "tabler-icons-react";

export default function Navbar() {

    return (
        <Group position="center" p="xs" style={{ backgroundColor: "grey" }}>
            <Button component="a" radius="xl" href="https://www.github.com/battagel" >
                <BrandGithub size={20} />
            </Button>
            <Button component="a" radius="xl" href="https://www.linkedin.com/in/matthewbattagel">
                <BrandLinkedin size={20} />
            </Button>
        </Group>
    )
}
