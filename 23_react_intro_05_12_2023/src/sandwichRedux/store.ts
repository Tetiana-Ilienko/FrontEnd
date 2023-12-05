import { createStore, combineReducers } from "redux";
import sandwichReducer from "./sandwichReducer";

const store = createStore(combineReducers({
    sandwich: sandwichReducer
}

));

export default store

export type RootState = ReturnType<typeof store.getState>