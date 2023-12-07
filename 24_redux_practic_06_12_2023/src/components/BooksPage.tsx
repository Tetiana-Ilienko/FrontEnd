import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import EditForm from './EditForm';

const BooksPage: React.FC = (): JSX.Element => {
    const books = useSelector((state: RootState) => state.library.books);

    const dispatch = useDispatch();

    



    return (
        <div>
            <h1>Books in our library</h1>
            <ul>
                {books.map(book => (
                    <li key={book.isbn}>
                        {book.isbn} :  "{book.title}"  {book.author} ({book.year})
                        <button onClick={() => dispatch({ type: 'books/delete', payload: book.isbn })}>Delete</button>
                        <EditForm isbn ={book.isbn}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BooksPage