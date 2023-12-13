import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/storeRTK';
import { decrement, increment } from '../../redux/counter/counterSlice';
import styles from "./counterRTK.module.css";
import cn from 'classnames'

const Counter: React.FC = (): JSX.Element => {

    const counter = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    const handleMinus = () => {
        dispatch(decrement(1))
        //dispatch({ type: 'counter/minus', payload: 1 })
    }

    const handlePlus = () => {
        dispatch(increment(1))
        //dispatch({ type: 'counter/plus', payload: 1 })
    }

    const handleMinus10 = () => {
        dispatch(decrement(10))
        // dispatch({ type: 'counter/minus', payload: 10 })
    }

    const handlePlus10 = () => {
        dispatch(increment(10))
        //dispatch({ type: 'counter/plus', payload: 10 })
    }




    return (
        <div className={styles.container} >
            <h1>Counter: {counter}</h1>
            <div>
                <button className={`${styles.button} ${styles.buttonGreen}`}  onClick={handleMinus}>Minus</button>
                <button className={`${styles.button} ${styles.buttonGreen}`} onClick={handlePlus}>Plus</button>
            </div>
            <div>
                <button className={cn(styles.button, styles.buttonBlue)} onClick={handleMinus10}>Minus10</button>
                <button className={cn(styles.button, styles.buttonBlue)} onClick={handlePlus10}>Plus10</button>
            </div>
        </div>
    )
}

export default Counter;