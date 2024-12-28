import { configureStore } from "@reduxjs/toolkit";
import counter from './counterslice'
import type from './userslice'


export let store = configureStore({
    reducer:{
        first:counter,
        second:type
    }
})