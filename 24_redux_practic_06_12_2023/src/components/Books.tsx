import React from 'react'
import { RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { title } from 'process';



const Books: React.FC = (): JSX.Element => {

    const books = useSelector((state: RootState) => state.book.books);
    const dispatch = useDispatch();

    const handleAddTitle =() => {
        dispatch({type: 'books/add', payload: {title}})
    }
    const handleAddAuthor =() => {
        dispatch({type: 'books/add', payload: {author}})
    }
    const handleAddYear =() => {
        dispatch({type: 'books/add', payload: {year}})
    }

    return (
        <div>
            <div>
                <label form="name">Book title:</label>
                <input
                    type="text"
                    placeholder="Enter book title..."
                    required
                />
                <button  onClick={handleAddTitle}>Add title</button>

                <label form="name">Book author:</label>
                <input
                    type="text"
                    placeholder="Enter author..."
                    required
                />
                <button  onClick={handleAddAuthor}>Add author</button>

                <label form="name">Year:</label>
                <input
                    type="text"
                    placeholder="Enter year..."
                    required
                />
                <button  onClick={handleAddYear}>Add year</button>
            </div>
        </div>
    )
}
export default Books;