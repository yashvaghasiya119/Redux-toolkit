import { createSlice } from "@reduxjs/toolkit";

let counterslice = createSlice({
    name:"counterslice",
    initialState:{
        no:0,
        privacy:true
    },
    reducers:{
        add:(state,action)=>{
                state.no += 1
        },
        min:(state,action)=>{
                state.no -= 1
        },
        addrandom:(state,action)=>{
                state.no += action.payload
                
        },
        setprivacy:(state,action)=>{
              state.privacy =  !state.privacy
        },
        additionfun:(state,action)=>{
            let {first,second}= action.payload
            state.no += first + second
        }
    }
})

export default counterslice.reducer

export let {add,min,setprivacy,addrandom,additionfun} = counterslice.actions