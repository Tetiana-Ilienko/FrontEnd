
import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "./counter/counterSlice";
import sandwichSlice from "./sandwich/sandwichSlice"



export const storeRTK = configureStore({
    reducer:{
       counter:  counterSlice,
       sandwich: sandwichSlice
    }
})

export type RootState = ReturnType<typeof storeRTK.getState>;
export type AppDispatch = typeof storeRTK.dispatch