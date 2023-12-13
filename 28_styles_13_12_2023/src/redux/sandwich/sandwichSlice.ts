import { createSlice, PayloadAction } from "@reduxjs/toolkit"




const initialState = {
    ingredients: ''
}

export const sandwichSlice = createSlice({
    name: 'sandwich',
    initialState,
    reducers: {

        addIngredient: (state, action: PayloadAction<string>) => {
            state.ingredients = `${state.ingredients}${action.payload} `
        },
        removeIngredient: (state, action: PayloadAction<string>) => {
            state.ingredients = ''

        }
    }

})

export const{addIngredient, removeIngredient} = sandwichSlice.actions;
export default sandwichSlice.reducer;




