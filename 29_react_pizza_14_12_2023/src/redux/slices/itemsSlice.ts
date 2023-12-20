import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ItemsState {
  items: Item[];
  item: Item | {};
  status: 'loading' | 'success' | 'error';
  activeType: number;
  activeSize: number;
  typeNames: string[];
}

export interface Item {
  id: string;
  images: string[];
  title: string;
  info: string[];
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
  reviews: number;
}

export const fetchItems = createAsyncThunk(
  "items/itemsFetchStatus",
  async (params: {
    categoryId: number;
    sortingItem: {
      name: string;
      sortProperty: string;
      order: string;
    };
    searchValue: string;
    currentPage: number;
  }) => {
    const { categoryId, sortingItem, searchValue, currentPage } = params;
    const res = await fetch(
      `https://6442fcd190738aa7c069c92c.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ""
      }&sortBy=${sortingItem.sortProperty}&order=${sortingItem.order}${
        searchValue ? `&search=${searchValue}` : ""
      }&page=${currentPage || 1}&limit=8`
    );
    const data = res.json();
    return data;
  }
);

const initialState: ItemsState = {
  items: [],
  item: {},
  status: "loading",
  activeType: 0,
  activeSize: 0,
  typeNames: ["тонкое", "традиционное"]
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Item[]>) {
      state.items = action.payload;
    },
    setItem(state, action: PayloadAction<Item>) {
      state.item = action.payload;
      localStorage.setItem("item", JSON.stringify(action.payload));
    },
    setActiveType(state, action: PayloadAction<number>) {
      state.activeType = action.payload;
    },
    setActiveSize(state, action: PayloadAction<number>) {
      state.activeSize = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = "loading";
        state.items = [];
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state) => {
        state.status = "error";
        state.items = [];
      });
  },
  // extraReducers: {
  //     [fetchItems.pending]: (state = initialState) => {
  //         state.status = 'loading';
  //         state.items = [];
  //     },
  //     [fetchItems.fulfilled]: (state = initialState, action: PayloadAction<[]>) => {
  //         state.status = 'success';
  //         state.items = action.payload;
  //     },
  //     [fetchItems.rejected]: (state = initialState) => {
  //         state.status = 'error';
  //         state.items = [];
  //     }
  // }
});

export const selectItemsData = (state: RootState) => state.items;

export const { setActiveSize, setActiveType, setItem, setItems } =
  itemsSlice.actions;

export default itemsSlice.reducer;