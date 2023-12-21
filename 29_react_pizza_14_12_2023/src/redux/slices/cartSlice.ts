
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IState {
    totalPrice: number,
    items: { id: string, count: number, price: number }[]
}
const initialState: IState = {
    totalPrice: 0,
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        addToCart: (state, action) => {
            const findItem = state.items.find(
                (item) => item.id === action.payload.id
            );

            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                })
            }

            state.totalPrice = state.items.reduce(
                (acc, item) => acc + item.price * item.count, 0
            );
        },
        incrementCount(state, action) {
            const findeItem = state.items.find(
                (item) => item.id === action.payload.id
            );

            if (findeItem) {
                findeItem.count++;
            }
            state.totalPrice = state.items.reduce(
                (acc, item) => acc + item.price * item.count, 0
            );

        },
        decrementCount(state, action) {
            const findeItem = state.items.find(
                (item) => item.id === action.payload.id
            );

            if (findeItem && findeItem.count > 1) {
                findeItem.count--;
            }
            state.totalPrice = state.items.reduce(
                (acc, item) => acc - item.price * item.count, 0
            );

        },
        removeAllItems(state) {
            state.items = [];
            state.totalPrice = 0;

        },
        removeItem(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload);
            state.totalPrice = state.items.reduce(
                (acc, item) => acc + item.price * item.count, 0
            )
        }




    }

}
)
export const selectCart = (state: RootState) => state.cart;

export const selectCartItemById = (id: string) => (state:RootState)=>(
    state.cart.items.find( item => item.id === id)
)
export const {
    addToCart,
    decrementCount,
    incrementCount,
    removeAllItems,
    removeItem
} = cartSlice.actions

export default cartSlice.reducer;