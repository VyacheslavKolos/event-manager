import React, {useEffect} from 'react';
import {Box, Stack} from "@mui/material";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAllEvents} from "../../store/slices";
import {EventCard} from "../../components";

const EventList = () => {

    const dispatch = useAppDispatch();

    const {events, isPublished} = useAppSelector(state => state.recordReducer)

    useEffect(() => {
        dispatch(getAllEvents());
    }, [isPublished])


    return (
        <Box sx={{mt: {lg: '44px', xs: '18px'}}}>
            <Stack flexWrap={'wrap'} sx={{
                gap: {lg: '82px', xs: '20px'},
                flexDirection: {lg: 'row', xs: 'column'},
                alignItems: {xs: 'center'}
            }}>

                {events.map(event => (
                    <EventCard key={event.id} event={event}/>
                ))}
            </Stack>
        </Box>
    );
};

export {EventList};
