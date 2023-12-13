import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/book/bookSlice';
import BooksPageRTK from './BooksPageRTK';
import cn from 'classnames';
import styles from './createBookRTK.module.css'

const CreateBookRTK = () => {
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [year, setYear] = useState<string>('');

    const dispatch = useDispatch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addBook({ title, author, year }));
        setTitle('');
        setAuthor('');
        setYear('');
    }

  return (
    <div className={styles.container}>
    <div>
        <h1>Create book</h1>

        <form className= {styles.form} onSubmit={handleSubmit}>
            
            <input
                type="text"
                placeholder='title'
                value={title}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder='author'
                value={author}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setAuthor(e.target.value)}
            />
            <input
                type="text"
                placeholder='year'
                value={year}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setYear(e.target.value)}
            />

            <button className= {styles.buttonAddBook} type='submit'>Add Book</button>
        </form>
        
    </div>
    <div>
       <BooksPageRTK/> 
    </div>
    </div>
  )
}

export default CreateBookRTK