import { Container, Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from '../components/navigation/NavBar';

const Layout = () => {
    const links: { name: string, url: string }[] = [
        { name: "Raiders", url: "raiders"}, 
        { name: "Raids", url: "raids" }, 
        { name: "Attendance", url: "attendance" }
      ];
    return (
    <>
        <NavBar pages={links} />
        <Container sx={{ marginTop: "2rem" }}>
            <Outlet />
        </Container>
    </>
    );
};

export default Layout;