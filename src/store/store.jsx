import { configureStore } from "@reduxjs/toolkit";
import count from './counterslice'

export let store = configureStore({
    reducer:{
        counter:count
    }
})