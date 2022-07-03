import React, {FC, useEffect, useState} from 'react';
import {Box, Stack} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../hooks";
import {getAllEvents} from "../store/slices";
import {IEvent} from "../interfaces";
import EventCard from "./EventCard";

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
    }, [filterPublished, events])


    return (
        <Box mt={'44px'}>
            <Stack direction={'row'} flexWrap={'wrap'} gap={'82px'}>
                {filterPublished ? publishedEvents.map(event=>(
                    <EventCard key={event.id} event={event}/>
                )) : unPublishedEvents.map(event=>(
                    <EventCard key={event.id} event={event}/>
                ))}
            </Stack>
        </Box>
    );
};

export default EventList;
