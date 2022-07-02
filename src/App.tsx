import React from 'react';

import Layout from "./components/Layout";
import {Navigate, Route, Routes} from "react-router-dom";
import {Box} from "@mui/material";

import './App.css';
import PublishedList from "./components/PublishedList";
import UnPublishedList from "./components/UnPublishedList";


const App = () => {
    return (
        <Box>
            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route path={'/published'} element={<PublishedList/>}/>

                    <Route
                        path="/"
                        element={<Navigate to="/published"/>}
                    />

                    <Route path={'/unpublished'} element={<UnPublishedList/>}/>
                </Route>

            </Routes>
        </Box>
    );
};

export default App;
