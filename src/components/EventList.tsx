import React, {FC, useEffect, useState} from 'react';
import {Box, Stack} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../hooks";
import {getAllEvents} from "../store/slices";
import {IEvent} from "../interfaces";

const EventList: FC<{ filterPublished: boolean; }> = ({filterPublished}) => {

    const [publishedTasks, setPublishedTasks] = useState<IEvent[]>([]);
    const [unPublishedTasks, setUnPublishedTasks] = useState<IEvent[]>([]);

    const dispatch = useAppDispatch();

    const {events, errors} = useAppSelector(state => state.recordReducer)

    useEffect(() => {
        dispatch(getAllEvents());
        if (filterPublished) {
            setPublishedTasks(events.filter(e => e.isPublished))
            setUnPublishedTasks([]);
        } else {
            setUnPublishedTasks(events.filter(e => !e.isPublished))
            setPublishedTasks([]);
        }
    }, [filterPublished])


    return (
        <Box mt={'44px'}>
            <Stack>

            </Stack>
        </Box>
    );
};

export default EventList;
