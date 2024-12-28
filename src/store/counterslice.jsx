import { createSlice } from "@reduxjs/toolkit";

let counterslice = createSlice({
    name:"counter",
    initialState:{
        count:0
    },
    reducers:{
        Increment:(state,action)=>{
            state.count += 1
        },
        Decrement:(state,action)=>{
            state.count -= 1
        },
        Payloadadd:(state,action)=>{
            state.count += action.payload   
        },
        // Multipli: (state, action) => {
        //     const { incrementValue, multiplier } = action.payload; // Destructure the payload
        //     state.no += incrementValue * multiplier; // Use both values
        // }
    }
})

export default counterslice.reducer
export let {Increment,Decrement,Payloadadd} =counterslice.actions