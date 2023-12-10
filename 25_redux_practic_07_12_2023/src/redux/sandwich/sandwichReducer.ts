
import { ISandwichState } from './sandwichState'
import sandwichAction from './sandwichAction';


const initialState: ISandwichState = {
    ingredients: ''
}

export default function sandwichReducer(state = initialState, action: sandwichAction): ISandwichState {
    switch (action.type) {
        case 'sandwich/addIngredient':
            return { ...state, ingredients: `${state.ingredients} ${action.payload}` };

        case 'sandwich/remove':
            return { ...state, ingredients: '' };


        default:
            return state;
    }

}