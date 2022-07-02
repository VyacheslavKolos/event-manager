import React, {useEffect} from 'react';
import {Box} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../hooks";
import {getAllEvents} from "../store/slices";
import EventCard from "./EventCard";

const UnPublishedList = () => {

    const dispatch = useAppDispatch();

    const {events, errors} = useAppSelector(state => state.recordReducer)

    useEffect(() => {
        dispatch(getAllEvents())
    }, [])

    return (
       <Box>
           {events.map((event)=>(
               <EventCard/>
           ))}
       </Box>
    );
};

export default UnPublishedList;
