import React, {FC, useEffect, useState} from 'react';
import {Box, Stack} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../hooks";
import {getAllEvents} from "../store/slices";
import {IEvent} from "../interfaces";

const EventList: FC<{ filterPublished: boolean; }> = ({filterPublished}) => {

    const [publishedEvents, setPublishedEvents] = useState<IEvent[]>([]);
    const [unPublishedEvents, setUnPublishedEvents] = useState<IEvent[]>([]);

    const dispatch = useAppDispatch();

    const {events, errors} = useAppSelector(state => state.recordReducer)

    useEffect(() => {
        dispatch(getAllEvents());
        if (filterPublished) {
            setPublishedEvents(events.filter(e => e.isPublished))
            setUnPublishedEvents([]);
        } else {
            setUnPublishedEvents(events.filter(e => !e.isPublished))
            setPublishedEvents([]);
        }
    }, [filterPublished])


    return (
        <Box mt={'44px'}>
            <Stack>
                {filterPublished ? publishedEvents.map(event=>(
                    event.title
                )) : unPublishedEvents.map(event=>(
                    event.title
                ))}
            </Stack>
        </Box>
    );
};

export default EventList;
