import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import './Counter.css'

const Counter: React.FC = (): JSX.Element => {

    const counter = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    const handleMinus = () => {
        dispatch({ type: 'counter/minus', payload: 1 })
    }

    const handlePlus = () => {
        dispatch({ type: 'counter/plus', payload: 1 })
    }

    const handleMinusTen = () => {
        dispatch({ type: 'counter/minus', payload: 10 })
    }

    const handlePlusTen = () => {
        dispatch({ type: 'counter/plus', payload: 10 })
    }




    return (
        <div className='container'>
            <h2>Counter: {counter}</h2>
            <div >
            <button  className='button-one' onClick={handleMinus}>Minus 1</button>
            <button  className='button-one' onClick={handlePlus}>Plus 1</button>
            </div>
            <div >
            <button  className='button-ten' onClick={handleMinusTen}>Minus 10</button>
            <button className='button-ten' onClick={handlePlusTen}>Plus 10</button>
            </div>

        </div>
    )
}

export default Counter