import React from 'react'
import { useSelector } from 'react-redux'
import { selectCart } from '../redux/slices/cartSlice'

const HeaderCart = () => {
    const { items, totalPrice } = useSelector(selectCart);
    const totalCount = items.reduce((acc: number, item: { count: number }) => acc + item.count, 0);
    return (<>
        <div>
            <span>{totalPrice} $</span>
        </div>
        <div></div>
        <div>
            <span>
                Корзина
                {totalCount}
            </span>
        </div>
    </>
    )
}

export default HeaderCart