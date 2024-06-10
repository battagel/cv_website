import { NavLink, Text, Navbar, ScrollArea, Title, Divider, Group } from "@mantine/core"
import { Home2 } from 'tabler-icons-react';
import { useLocation } from 'react-router-dom';
import ThemeButton from "../../components/themebutton";

export default function NavbarSection() {

    const location = useLocation();
    console.log(location.pathname)

    return (
        <Navbar p="xs" width={{ base: 275 }}>
            <Navbar.Section>
                <Group style={{ justifyContent: "space-between" }}>
                    <Title>
                        Help Center
                    </Title>
                    <Group>
                        <ThemeButton />
                    </Group>
                </Group>
                <Divider my="xs" />
            </Navbar.Section>
            <Navbar.Section component={ScrollArea} grow mt="md">
                <NavLink
                    label="Home"
                    component="a"
                    icon={<Home2 size="1rem" stroke="1.5" />}
                    href={"/"}
                    color="teal"
                />
                <Divider m="xs" />
                <NavLink
                    active={location.pathname === "/help"}
                    label="Dashboard"
                    icon={<Home2 size="1rem" stroke="1.5" />}
                    component="a"
                    href={"/#/help"}
                    color="teal"
                />
                <NavLink
                    active={location.pathname === "/help/antonium"}
                    label="Antonium"
                    icon={<Home2 size="1rem" stroke="1.5" />}
                    component="a"
                    href={"/#/help/antonium"}
                    color="teal"
                    childrenOffset={28}
                />
            </Navbar.Section>
            <Navbar.Section>
                <Text size="sm">By Matthew Battagel</Text>
            </Navbar.Section>
        </Navbar >
    )
}
