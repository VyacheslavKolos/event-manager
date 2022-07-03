import React, {useState} from 'react';
import {Box} from "@mui/material";
import Navbar from "./Navbar";
import NavigationBarAndAddEvent from "./NavigationBarAndAddEvent";
import EventList from "./EventList";


const Layout = () => {

    const [filterPublished, setFilterPublished] = useState(true);

    return (
        <Box width="400px" sx={{width: {lg: '1020px'}}} m="auto" mt={'30px'}>
            <Navbar/>
            <NavigationBarAndAddEvent setFilterPublished={setFilterPublished}/>
            <EventList filterPublished={filterPublished}/>
        </Box>
    );
};

export default Layout;
