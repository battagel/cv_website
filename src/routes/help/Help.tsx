import { AppShell, Stack } from "@mantine/core";
import NavbarSection from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Help() {
    return (
        <AppShell
            navbar={<NavbarSection />}
            fixed
        >
            <Outlet />
        </AppShell>
    );
}
