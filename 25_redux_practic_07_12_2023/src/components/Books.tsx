import React, { ChangeEvent, FormEvent, useState } from 'react';
//import { RootState } from '../redux/store';
import { useDispatch } from 'react-redux';







const Books: React.FC = (): JSX.Element => {

    // const [newBook, setNewBook] = useState<{ title: string; author: string; year: number }>(
    //     { title: '', author: '', year: 0 });

    const[title, setTitle] = useState<string>('');
    const[author, setAuthor] = useState<string>('');
    const[year, setYear] = useState<string>('');

    //const books = useSelector((state: RootState) => state.book.books);
    const dispatch = useDispatch();

    const handleSubmit =(e: FormEvent<HTMLFormElement> ) =>{
        // дефолтное поведение 
        e.preventDefault();  
        dispatch({ type: 'books/add', payload: { title, author, year } });  
        setTitle('');               
        setAuthor('');                
        setYear('');                

    }


    

    // const handleAddBook = () => {
    //     dispatch({ type: 'books/add', payload: newBook });

    // }

    // const handleDeleteBook = (isbn: string) => {
    //     dispatch({ type: 'books/delete', payload: isbn });

    // }





    return (
        <div>
            <h1>Enter new book</h1>
            <form onSubmit ={handleSubmit}>

                <label form="name">Title:</label>
                <input
                    type="text"
                    placeholder="Enter title ..."
                    value={title}
                   // onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                   onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle( e.target.value )}
                    required
                />
                <label form="name">Author:</label>
                <input
                    type="text"
                    placeholder="Enter author ..."
                    value={author}
                   // onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                   onChange={(e: ChangeEvent<HTMLInputElement>) => setAuthor( e.target.value )}
                    required
                />
                <label form="name">Year:</label>
                <input
                    type="number"
                    placeholder="Enter year ..."
                    value={year}
                    //onChange={(e) => setNewBook({ ...newBook, year: parseInt(e.target.value) })}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setYear( e.target.value )}
                    required
                />
                {/* </form>button onClick={handleAddBook}>Add book</button> */}
                <button type='submit'>Add book</button>
            </form>


            {/* <ul>
                {books.map(book => (
                    <li key={book.isbn}>
                        {book.isbn} :  "{book.title}"  {book.author} ({book.year})
                        <button onClick={() => handleDeleteBook(book.isbn)}>Delete</button>

                    </li>
                ))}
            </ul> */}
        </div>
    )
}
export default Books;