import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilter, setCurrentPage } from '../redux/slices/filterSlice'

const Pagination = () => {
    const { currentPage } = useSelector(selectFilter);
    const dispatch = useDispatch(); 
  return (
    <section>
        <ul>
            <li>
                <button
                    onClick={() => dispatch(setCurrentPage(currentPage - 1))}
                    disabled={currentPage === 1}
                >
                    &lt;
                </button>
            </li>
            <li>
                <button onClick={() => dispatch(setCurrentPage(1))}>1</button>
            </li>
            <li>
                <button onClick={() => dispatch(setCurrentPage(2))}>2</button>
            </li>
            <li>
                <button
                    onClick={() => dispatch(setCurrentPage(currentPage + 1))}
                    disabled={currentPage === 2}
                >
                    &gt;
                </button>
            </li>
        </ul>
    </section>
  )
}

export default Pagination