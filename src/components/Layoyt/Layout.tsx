import React from 'react';
import {Box} from "@mui/material";

import {Navbar, EventList, NavigationBarAndAddEvent} from "../../components";


const Layout = () => {

    return (
        <Box width="400px" sx={{width: {lg: '1020px'}}} m="auto" mt={'30px'}>
            <Navbar/>
            <NavigationBarAndAddEvent/>
            <EventList/>
        </Box>
    );
};

export default Layout;
