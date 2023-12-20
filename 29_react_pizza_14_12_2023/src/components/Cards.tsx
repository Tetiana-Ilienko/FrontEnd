import React from 'react'
import { useSelector } from 'react-redux'
import { selectItemsData } from '../redux/slices/itemsSlice'
import Card from './Card';

const Cards: React.FC<{ title: string }> = ({ title }) => {
    const { items, status } = useSelector(selectItemsData);

  return (
    <div>
        <h2>{title}</h2>
        {
            status === 'error' ? (
                <p>Данные не загрузились. Попробуйте зайти позже</p>
            ) : (
                <div>
                    {
                        status === 'loading' ?
                        <>Loading...</> :
                        items.map(item => <Card {...item} key={item.id} />)
                    }
                </div>
            )
        }
    </div>
  )
}

export default Cards