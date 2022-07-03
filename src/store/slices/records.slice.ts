import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IEvent, ITimezone} from "../../interfaces";
import {recordService} from "../../services";

interface IRecordsState {
    timezones: ITimezone[],
    events: IEvent[],
    errors: object
}

const initialState: IRecordsState = {
    timezones: [],
    events: [],
    errors: []
}

export const getAllTimezones = createAsyncThunk(
    'recordSlice/getAllTimezones',
    async (_, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await recordService.getAllTimezones()
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
            const {data} = await recordService.getAll()
            dispatch(setEvents({events: data}))
        } catch (e: any) {
            return rejectWithValue(e.message);
        }
    }
)

export const createEventThunk = createAsyncThunk<void, { event: IEvent }>(
    'recordSlice/createEventThunk',
    async ({event}, {dispatch}) => {
        const {data} = await recordService.create(event);
        dispatch(addEvent({event: data}))
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
            state.events = action.payload.events;
        }),
        addEvent: ((state, action: PayloadAction<{ event: IEvent }>) => {
            state.events.push(action.payload.event)
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

export const {setTimezones, setEvents, addEvent} = productSlice.actions;

