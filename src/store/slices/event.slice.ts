import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IEvent, ITimezone} from "../../interfaces";
import {eventService} from "../../services";

interface IRecordsState {
    timezones: ITimezone[],
    events: IEvent[],
    isPublished: boolean,
    SelectedTimezone: ITimezone,
    errors: object,
}

const initialState: IRecordsState = {
    timezones: [],
    events: [],
    isPublished: false,
    SelectedTimezone: {
        id: 0,
        name: 'Eastern Time - EDT',
        value: "America/New_York",
        offset: "GMT-0400"
    },
    errors: []
}

export const getAllTimezones = createAsyncThunk(
    'recordSlice/getAllTimezones',
    async (_, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await eventService.getAllTimezones()
            dispatch(setTimezones({timezones: data}))
        } catch (e: any) {
            return rejectWithValue(e.message);
        }
    }
)

export const getAllEvents = createAsyncThunk(
    'recordSlice/getAllEvents',
    async (_, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await eventService.getAll()
            dispatch(setEvents({events: data}))
        } catch (e: any) {
            return rejectWithValue(e.message);
        }
    }
)

export const createEventThunk = createAsyncThunk<void, { event: IEvent }>(
    'recordSlice/createEventThunk',
    async ({event}, {dispatch}) => {
        const {data} = await eventService.create(event);
        dispatch(addEvent({event: data}))
    }
)

export const deleteEventThunk = createAsyncThunk<void, { id: number }>(
    'recordSlice/deleteEventThunk',
    async ({id}, {dispatch}) => {
        await eventService.deleteById(id)
        dispatch(deleteEvent({id}))
        const {data} = await eventService.getAll()
        dispatch(setEvents({events: data}))
    }
)

export const PublishEventThunk = createAsyncThunk<void, { id: number, event: IEvent }>(
    'recordSlice/PublishEventThunk',
    async ({id, event}, {dispatch}) => {
        const newEvent = {
            title: event.title,
            time: event.time,
            isPublished: !event.isPublished,
            id
        }
        await eventService.publishEvent(id, newEvent)
        dispatch(publishEvent({event: newEvent}))
    }
)

export const EditEventThunk = createAsyncThunk<void, { id: number, event: IEvent }>(
    'recordSlice/EditEventThunk',
    async ({id, event}, {dispatch}) => {
        const newEvent = {
            title: event.title,
            time: event.time,
            isPublished: event.isPublished,
            id
        }
        console.log(newEvent);
        await eventService.editEvent(id, newEvent)
        dispatch(publishEvent({event: newEvent}))
    }
)

export const productSlice = createSlice({
    name: 'recordSlice',
    initialState,
    reducers: {
        setTimezones: ((state, action: PayloadAction<{ timezones: ITimezone[] }>) => {
            state.timezones = action.payload.timezones;
        }),
        setEvents: ((state, action: PayloadAction<{ events: IEvent[] }>) => {
            if (state.isPublished) {
                state.events = action.payload.events.filter(event => event.isPublished);
            } else {
                state.events = action.payload.events.filter(event => !event.isPublished)
            }
        }),
        addEvent: ((state, action: PayloadAction<{ event: IEvent }>) => {
            state.events.push(action.payload.event)
        }),
        deleteEvent: ((state, action) => {
            state.events.filter(event => event.id !== action.payload.id)
        }),
        publishEvent: ((state, action) => {
            const index = state.events.findIndex(event => event.id === action.payload.event.id)
            state.events[index] = action.payload.event
        }),
        setIsPublishedEvent: ((state, action) => {
            state.isPublished = action.payload
        }),
        SetSelectedTimezone: ((state, action) => {
            state.SelectedTimezone = action.payload
        }),

    },
    extraReducers: {
        [getAllTimezones.rejected.toString()]: (state: any, action: PayloadAction<string>) => {
            state.errors = action.payload
        },
        [getAllEvents.rejected.toString()]: (state: any, action: PayloadAction<string>) => {
            state.errors = action.payload
        },

    }

})

const recordReducer = productSlice.reducer;
export default recordReducer;

export const {
    setTimezones,
    setEvents,
    addEvent,
    deleteEvent,
    publishEvent,
    setIsPublishedEvent,
    SetSelectedTimezone
} = productSlice.actions;

