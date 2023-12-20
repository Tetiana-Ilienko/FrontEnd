import React from 'react'
import { Item, selectItemsData, setItem } from '../redux/slices/itemsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, selectCartItemById } from '../redux/slices/cartSlice'
import { selectFilter } from '../redux/slices/filterSlice'

const Card: React.FC<Item> = (cardItem, { id, info, images, price, rating, title, sizes, types }) => {
  const counter = useSelector(selectCartItemById(id));
  const count: number | undefined = counter && counter.count;
  const { activeSize, activeType } = useSelector(selectItemsData);
  const { categoryName } = useSelector(selectFilter);
  const isCategoryClose = categoryName === 'Закрытые';
  const dispatch = useDispatch();
  
    return (
    <div>
        <div>

            <span>{rating}</span>
        </div>
        <img src={images[0]} alt={title} />
        <h2 onClick={() => dispatch(setItem(cardItem))}>
            {title}
        </h2>

        <div>
            <span>от {price} ₽</span>
            <button
                onClick={() => dispatch(addToCart(cardItem))}
            >
                <span>+</span>
                Добавить
                { count && <span>{count}</span> }
            </button>
        </div>
    </div>
  )
}

export default Card