import {combineReducers, configureStore} from "@reduxjs/toolkit";
import recordReducer from "./slices/event.slice";



const rootReducer = combineReducers({
    recordReducer
})

export const setupStore = () => configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch=AppStore['dispatch'];

