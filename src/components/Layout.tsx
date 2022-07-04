import React, {useState} from 'react';
import {Box} from "@mui/material";
import Navbar from "./Navbar";
import NavigationBarAndAddEvent from "./NavigationBarAndAddEvent";
import EventList from "./EventList";
import {useAppSelector} from "../hooks";


const Layout = () => {


    return (
        <Box width="400px" sx={{width: {lg: '1020px'}}} m="auto" mt={'30px'}>
            <Navbar/>
            <NavigationBarAndAddEvent />
            <EventList />
        </Box>
    );
};

export default Layout;
