import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { onClickSort, selectFilter } from '../redux/slices/filterSlice';

const Sorting: React.FC = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const { sortingItem } = useSelector(selectFilter);
    const dispatch = useDispatch();
    const order: string = sortingItem.order.includes('asc') ? 'desc' : 'asc';
    const sortingItems = [
        {
            name: 'популярности',
            sortProperty: 'rating',
            order
        },
        {
            name: 'цене',
            sortProperty: 'price',
            order
        },
        {
            name: 'алфавиту',
            sortProperty: 'title',
            order
        }
    ];
    const sortingRef = useRef<HTMLSpanElement>(null);

    const onClickSortingButton = (item: {name: string, sortProperty: string, order: string}) => {
        dispatch(onClickSort(item));
        setIsVisible(false);
    };

    const onClickOutside = (e:MouseEvent) => {
        if(e.target !== sortingRef.current){
            setIsVisible(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', onClickOutside);
        return () => {
            document.removeEventListener('click', onClickOutside);
        }
    })
    return (
        <div>
            <p>
                Сортировка по:
                <span ref ={sortingRef}>принцип сортировки</span>
            </p>
            <ul>
                {sortingItems.map((item,index) => (
                    <li key = {index}>
                        <button
                         type = 'button'
                         onClick={() =>onClickSortingButton(item)}>
                            {item.name}

                         </button>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default Sorting;