import { bookAction } from './bookAction';
import { IBookState } from './bookState';
import { uid } from 'uid';

const initialState: IBookState = {
    books: [
        {
            isbn: '1', title: 'Harry Potter',
            author: 'J.K. Rowling', year: 1997
        }
    ]

}

export default function booksReducer(state = initialState,
    action: bookAction) {

    switch (action.type) {
        case 'books/add':
            return{...state, books:[...state.books, {isbn: uid(3),...action.payload}]};

        case 'books/delete':
            return {...state, books: state.books.filter(book => book.isbn !== action.payload)};
            // используем метод filter(), котоый работает с копием массива state. и создает новый массив, без книги с
            // с указанным индексом

        // case 'books/aditTitle':
        //     return;

        default:
            return state;
    }



}