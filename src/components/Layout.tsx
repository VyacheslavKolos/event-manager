import React from 'react';
import {Box} from "@mui/material";
import Navbar from "./Navbar";
import NavigationBarAndAddEvent from "./NavigationBarAndAddEvent";
import {Outlet} from "react-router-dom";


const Layout = () => {
    return (
        <Box width="400px" sx={{width: {lg: '1020px'}}} m="auto">
            <Navbar/>
            <NavigationBarAndAddEvent/>

            <Outlet/>
        </Box>
    );
};

export default Layout;
