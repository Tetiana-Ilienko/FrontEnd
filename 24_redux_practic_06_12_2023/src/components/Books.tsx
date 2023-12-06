import React, { useState } from 'react';
import { RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import InputBook from './InputBook';






const Books: React.FC = (): JSX.Element => {

    const [newBook, setNewBook] = useState<{ title: string; author: string; year: number }>({ title: '', author: '', year: 0 });


    const books = useSelector((state: RootState) => state.book.books);
    const dispatch = useDispatch();

    const handleAddBook = () => {
        dispatch({ type: 'books/add', payload: newBook });
        
    }

    const handleDeleteBook = (isbn: string) => {
        dispatch({ type: 'books/delete', payload: isbn });
        
    }

        



    return (
        <div>
            <h1>Enter new book</h1>
            <div>
                
                <label form="name">Title:</label>
                <input
                    type="text"
                    placeholder="Enter title ..."
                    onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                    required
                />
                <label form="name">Author:</label>
                <input
                    type="text"
                    placeholder="Enter author ..."
                    onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                    required
                />
                <label form="name">Year:</label>
                <input
                    type="number"
                    placeholder="Enter year ..."
                    onChange={(e) => setNewBook({ ...newBook, year:parseInt(e.target.value)  })}
                    required
                />
                
            </div>
            <button onClick={handleAddBook}>Add book</button>

            <ul>
                {books.map(book => (
                    <li key={book.isbn}>
                      {book.isbn} :  "{book.title}"  {book.author} ({book.year})
                      <button onClick={() => handleDeleteBook(book.isbn)}>Delete</button>
                        
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Books;