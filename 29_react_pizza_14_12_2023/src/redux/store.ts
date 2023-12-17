import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import searchReducer from "./slices/searchSlice";
import filterReducer from "./slices/filterSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        search: searchReducer,
        filter: filterReducer
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>