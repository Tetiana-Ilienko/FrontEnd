import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../sandwichRedux/store';


const Sandwich: React.FC = (): JSX.Element => {

    const ingredients = useSelector((state: RootState) => state.sandwich.ingredients);
    const dispatch = useDispatch();

    const handleAddBread = () => {
        dispatch({ type: 'add/broad', payload: 'хлеб' });
    };

    const handleAddCheese = () => {
        dispatch({ type: 'add/cheese', payload: 'сыр' });
    };

    const handleAddSausage = () => {
        dispatch({ type: 'add/sausage', payload: 'колбаса' });
    };
    const handleRemove = () => {
        dispatch({ type: 'remove' });
    };



    return (
        <div>
            <h1>Sandwich: {ingredients.join(' ')}</h1>
            <button onClick={handleAddBread}>Добавить хлеб</button>
            <button onClick={handleAddCheese}>Добавить сыр</button>
            <button onClick={handleAddSausage}>Добавить колбасу</button>
            <button onClick={handleRemove}>Новый бутерброд</button>
        </div>
    )
}

export default Sandwich;







