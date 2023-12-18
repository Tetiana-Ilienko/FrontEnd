import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store";

// `https://6442fcd190738aa7c069c92c.mockapi.io/items?${categoryId > 0 ? `category=${categoryId} : ""
//       }&sortBy=${sortingItem.sortProperty}&order=${sortingItem.order}${searchValue ? &search=${searchValue} : ""
//       }&page=${currentPage || 1}&limit=8`

export const fetchItems = createAsyncThunk(
    'items/itemsFetchStatus',
    async (
        params: {
            categoryId: number,
            sortingItem: {
                name: string,
                sortProperty: string,
                order: string
            },
            searchValue: string,
            currentPage: number
        }) => {
        const { categoryId, sortingItem, searchValue, currentPage } = params;
        const res = await fetch(`https://6442fcd190738aa7c069c92c.mockapi.io/items?${categoryId > 0 ? `category=${categoryId}` : ""}&sortBy=${sortingItem.sortProperty}&order=${sortingItem.order}${searchValue ? `&search=${searchValue}` : ""}&page=${currentPage || 1}&limit=8`);
        const data = res.json();
        return data;

    }

)
const initialState = {
    items: [],
    item: {},
    status: 'loading',
    activeType: 0,
    activeSize: 0,
    typeNames: ['тонкое', 'традиционное']

}

export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {

        setItems(state, action) {
            state.items = action.payload;
        },
        setItem(state, action) {
            state.item = action.payload;
            localStorage.setItem('item', JSON.stringify(action.payload));
        },

        setActivType(state, action) {
            state.activeType = action.payload;
        },
        setActiveSize(state, action) {
            state.activeSize = action.payload;
        },

    },
    extraReducers: {
        [fetchItems.pending]: (state = initialState) => {
            state.status = 'loading';
            state.items = [];
        },
        [fetchItems.fulfilled]: (state = initialState, action: PayloadAction<[]>) => {
            state.status = 'success';
            state.items = action.payload;
        },
        [fetchItems.rejected]: (state = initialState) => {
            state.status = 'error';
            state.items = [];
        }

    }

});

export const selectItemsData = (state: RootState) => state.items;

export const {setActiveSize, setActiveType, setItems, setItem} = itemsSlice.actions;

export default itemsSlice.reducer;