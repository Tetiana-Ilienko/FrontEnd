import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/storeRTK';
import { addIngredient, removeIngredient } from '../redux/sandwich/sandwichSlice';

const SandwichRTK = () => {

    const ingredients = useSelector((state: RootState) => state.sandwich.ingredients);
    const dispatch = useDispatch();

    const handleAddBread = () => {
        dispatch(addIngredient('хлеб' ))
    };

    const handleAddCheese = () => {
        dispatch(addIngredient('сыр'))
       
    };

    const handleAddSausage = () => {
        dispatch(addIngredient ('колбаса') )
    };
    const handleRemove = () => {
        dispatch(removeIngredient (''));
    
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

export default SandwichRTK