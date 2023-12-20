import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getProducts } from './productsSlice'

const ProductsList = () => {
    const { products } = useAppSelector(state => state.products)
    const dispatch = useAppDispatch()
  useEffect(() => {
    
    dispatch(getProducts())
  }, [dispatch])
    return (


        <>{products.map(el => (
            <div key={el.id}>
                <h1>{el.title}</h1>
                <img src={el.image} alt="" />
            </div>
        
        ))}</>
    )

} 

export default ProductsList