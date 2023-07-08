import { createSlice } from "@reduxjs/toolkit";

const Calcslice = createSlice({
    name : 'calc',
    initialState : {
        result : 0,
        current : 0
    },
    reducers : {
        checking(state, action){
            state.result += action.payload;
        },
        slideingNext(state){
            state.current += 100
        },
        slideingPrev(state){
            state.current -= 100
        }
    }
})

export default Calcslice.reducer;
export const { checking , slideingNext , slideingPrev} = Calcslice.actions;