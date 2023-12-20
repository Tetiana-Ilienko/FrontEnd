import React from 'react'
import { onClickCategory, selectFilter } from '../redux/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

const Categories = () => {
    const { categoryNames, categoryId } = useSelector(selectFilter);
    const dispatch = useDispatch();

    

    return (
        <ul>
            {categoryNames.map((name, index) => (
                <li key={index}>
                    <button
                    type='button'
                    className={`${categoryId === index ? 'categories__button_active': ''}`}
                    onClick={() => dispatch(onClickCategory(index))}
                    >

                    </button>
                </li>
            ))}
        </ul>

    )
}

export default Categories