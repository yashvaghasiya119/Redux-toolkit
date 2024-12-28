import { createSlice } from "@reduxjs/toolkit";

export let userslice = createSlice({
    name:"user",
    initialState:{
        type:""
    },
    reducers:{
        driver:(state,action)=>{
            state.type="driver"
        },
        pessanger:(state,action)=>{
            state.type="passnger"
        }
    }
})

export default userslice.reducer

export let {driverdata,pessangerdata} = userslice.actions