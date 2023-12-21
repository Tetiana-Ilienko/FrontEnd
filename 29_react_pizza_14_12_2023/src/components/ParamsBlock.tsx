import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectItemsData, setActiveSize, setActiveType } from '../redux/slices/itemsSlice';
interface ParamsBlockProps {
    className: string;
    types: number[];
    sizes: number[];
}

const ParamsBlock: React.FC<ParamsBlockProps> = ({ className, sizes, types }) => {
    const { typeNames } = useSelector(selectItemsData);
    const dispatch = useDispatch();

    const [typeIndex, setTypeIndex] = useState<number>(0);
    const [sizeIndex, setSizeIndex] = useState<number>(0);

    const onClickType = (typeId: number) => {
        setTypeIndex(typeId);
        dispatch(setActiveType(typeId))
    }

    const onClickSize = (index: number) => {
        setSizeIndex(index);
        dispatch(setActiveSize(index))
    }

    return (
        <div>
            <ul>
                {types &&
                    types.map((typeId, index) => (
                        <li key={index}>
                            <button
                                type='button'
                                onClick={() => onClickType(typeId)}
                            >
                                {typeNames[typeId]}
                            </button>

                        </li>
                    ))}
            </ul>
            <ul>
                {sizes &&
                    sizes.map((size, index) => (
                        <li key={index}>
                            <button
                                type='button'
                                onClick={() => onClickSize(size)}
                            >
                                {size} см.
                            </button>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default ParamsBlock