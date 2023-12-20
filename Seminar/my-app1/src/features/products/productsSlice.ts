import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import IProducts from "./type/state"
const initialState: IProducts = {
    products: [],
    isLoading: false,
    error: null,
}

 export const getProducts = createAsyncThunk("getProducts", async (_, thunkAPI) => {
    try {
        const res = await fetch("https://fakestoreapi.com/products")
        return res.json()
    } catch (error) {
        console.log("error")
    }
})
export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload
         })
    },
})
