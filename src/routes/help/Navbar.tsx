import { NavLink, Text, Navbar, ScrollArea, Title, Divider } from "@mantine/core"
import { Home2, BrandChrome } from 'tabler-icons-react';
import { useState } from "react";
import { useLocation } from 'react-router-dom';


const data = [
    { icon: Home2, label: 'Dashboard', href: "/help" },
    { icon: BrandChrome, label: 'Antonium', href: "/help/antonium" },
];

export default function NavbarSection() {

    const [active, setActive] = useState(0);
    const location = useLocation();

    const items = data.map((item, index) => (
        <NavLink
            key={item.label}
            active={location.pathname === item.href}
            label={item.label}
            icon={<item.icon size="1rem" stroke="1.5" />}
            onClick={() => setActive(index)}
            component="a"
            href={"/#" + item.href}
            color="teal"
        />
    ));

    return (
        <Navbar p="xs" width={{ base: 300 }}>
            <Navbar.Section>
                <Title>
                    Help Center
                </Title>
                <Divider my="xs" />
            </Navbar.Section>
            <Navbar.Section component={ScrollArea} grow mt="md">
                {items}
            </Navbar.Section>
            <Navbar.Section>
                <Text size="sm">By Matthew Battagel</Text>
            </Navbar.Section>
        </Navbar>
    )
}
