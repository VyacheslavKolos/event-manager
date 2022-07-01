import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {ITimezone} from "../../interfaces";
import {recordService} from "../../services";

interface IRecordsState {
    timezones: ITimezone[],
    errors: object
}

const initialState: IRecordsState = {
    timezones: [],
    errors: []
}

export const getAllTimezones = createAsyncThunk(
    'recordSlice/getAllTimezones',
    async (_, {dispatch, rejectWithValue}) => {
        try {
            const {data} = await recordService.getAll()
            dispatch(setTimezones({timezones: data}))
        } catch (e: any) {
            return rejectWithValue(e.message);
        }
    }
)


export const productSlice = createSlice({
    name: 'recordSlice',
    initialState,
    reducers: {
        setTimezones: ((state, action: PayloadAction<{ timezones: ITimezone[] }>) => {
            state.timezones = action.payload.timezones;
        }),
    },
    extraReducers: {}

})

const recordReducer = productSlice.reducer;
export default recordReducer;

export const {setTimezones} = productSlice.actions;

