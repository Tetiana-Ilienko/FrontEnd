import Action from './sandwichAction';
import { ISandwichState } from './sandwichState'


const initialState: ISandwichState = {
    ingredients: []
}

export default function sandwichReducer(state = initialState, action: Action): ISandwichState {
    switch (action.type) {
        case 'add/broad':

            return { ...state, ingredients: [...state.ingredients, action.payload] };
        case 'add/cheese':

            return { ...state, ingredients: [...state.ingredients, action.payload] };

        case 'add/sausage':
            return { ...state, ingredients: [...state.ingredients, action.payload] };

            case 'remove':
            return { ...state, ingredients: [] };


        default:
            return state;
    }

}