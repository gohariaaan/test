import { configureStore, combineReducers } from "@reduxjs/toolkit";
import Calcslice from "./Calcslice";

const rootReducer = combineReducers({
    calc : Calcslice,
    
})

export const store = configureStore({
    reducer : rootReducer
})