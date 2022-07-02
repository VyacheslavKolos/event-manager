import React, {useEffect} from 'react';
import {Box} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../hooks";
import {getAllEvents} from "../store/slices";

const PublishedList = () => {

    // const dispatch = useAppDispatch();
    //
    // const {events, errors} = useAppSelector(state => state.recordReducer)
    //
    // useEffect(() => {
    //     dispatch(getAllEvents())
    // }, [])
    //
    // console.log(events);

    return (
        <Box>
            Hellooooo
        </Box>
    );
};

export default PublishedList;
