import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';



const Sandwich: React.FC = (): JSX.Element => {

    const ingredients = useSelector((state: RootState) => state.sandwich.ingredients);
    const dispatch = useDispatch();

    const handleAddBread = () => {
        dispatch({ type: 'sandwich/addIngredient', payload: 'хлеб' });
    };

    const handleAddCheese = () => {
        dispatch({ type: 'sandwich/addIngredient', payload: 'сыр' });
    };

    const handleAddSausage = () => {
        dispatch({ type: 'sandwich/addIngredient', payload: 'колбаса' });
    };
    const handleRemove = () => {
        dispatch({ type: 'sandwich/remove' });
    };



    return (
        <div>
            <h1>Выбери свой Sandwich</h1>
            <p>Sandwich: {ingredients}</p>
            <button onClick={handleAddBread}>Добавить хлеб</button>
            <button onClick={handleAddCheese}>Добавить сыр</button>
            <button onClick={handleAddSausage}>Добавить колбасу</button>
            <button onClick={handleRemove}>Новый бутерброд</button>
        </div>
    )
}

export default Sandwich;







