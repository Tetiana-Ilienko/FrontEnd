import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
    searchValue: ''
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        onChangeSearch(state, action) {
            state.searchValue = action.payload;
        }
    }
});

export const selectSearch = (state: RootState) => state.search;

export const { onChangeSearch } = searchSlice.actions;

export default searchSlice.reducer;