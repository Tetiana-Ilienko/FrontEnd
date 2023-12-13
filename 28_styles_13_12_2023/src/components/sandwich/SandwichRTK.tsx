import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/storeRTK';
import { addIngredient, removeIngredient } from '../../redux/sandwich/sandwichSlice';
import styles from './sandwichRTK.module.css'
import cn from "classnames";

const SandwichRTK: React.FC = (): JSX.Element => {

    const ingredients = useSelector((state: RootState) => state.sandwich.ingredients);
    const dispatch = useDispatch();

    const handleAddBread = () => {
        dispatch(addIngredient('хлеб'))
    };

    const handleAddCheese = () => {
        dispatch(addIngredient('сыр'))

    };

    const handleAddSausage = () => {
        dispatch(addIngredient('колбаса'))
    };
    const handleRemove = () => {
        dispatch(removeIngredient(''));

    };
    return (
        <div className={styles.container}>
            <h1>Выбери свой Sandwich</h1>
            <h2 className={styles.header}>Sandwich: {ingredients}</h2>
            <div style={{ display:'flex', justifyContent:'space-around'}}>
                <button className={cn(styles.button)} onClick={handleAddBread}>Добавить хлеб</button>
                <button className={styles.button} onClick={handleAddCheese}>Добавить сыр</button>
                <button className={styles.button} onClick={handleAddSausage}>Добавить колбасу</button>
                <button className={styles.button} onClick={handleRemove}>Новый бутерброд</button>
            </div>

        </div>
    )
}

export default SandwichRTK