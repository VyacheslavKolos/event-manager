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
        <Box mt={'44px'}>
            <Stack direction={'row'} flexWrap={'wrap'} gap={'82px'}>

                {events.map(event => (
                    <EventCard key={event.id} event={event}/>
                ))}
            </Stack>
        </Box>
    );
};

export  {EventList};
