import { bookAction } from './bookAction';
import { IBookState } from './bookState';
import { uid } from 'uid';

const initialState: IBookState = {
    books: [
        {
            isbn: 'jhvso;fi82', title: 'Harry Potter',
            author: 'J.K. Rowling', year: 1997
        }
    ]

}

export default function booksReducer(state = initialState,
    action: bookAction) {

    switch (action.type) {
        case 'books/add':
            return{...state, books:[...state.books, {isbn: uid(),...action.payload}]};

        case 'books/delete':
            return {...state, books:[...state.books]};

        // case 'books/aditTitle':
        //     return;

        default:
            return state;
    }



}