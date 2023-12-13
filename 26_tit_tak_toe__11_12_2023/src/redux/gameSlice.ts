import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Root } from "react-dom/client";
import { RootState } from "./store";

interface IGameState {
    squares: Array<'X' | 'O' | null>;
    xIsNext: boolean;

}
const initialState: IGameState = {
    squares: Array(9).fill(null),
    xIsNext: true
}


const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {

        handleClick: (state, action: PayloadAction<number>) => {

            if (action.payload === -1){
                state.squares = Array(9).fill(null);
                state.xIsNext = true;
            }
            // сщздаем копие
            const squares =[...state.squares];
             // если есть победитеть или в ячейке что-то есть
            if(calculateWinner(squares) || squares[action.payload]){
                // выходим
                return;

            };
            // иначе ставим либо х либо о
            squares[action.payload] = state.xIsNext ? 'X' : 'O';
            state.xIsNext = !state.xIsNext;
            // переписываем состояние
            state.squares = squares;

        }

    }

});


export function calculateWinner(squares: Array<'X' | 'O' | null> ) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]

    ];

    // for( const winLine of lines)
    for (const [a, b, c] of lines) {
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[b] === squares[c]
        ) {
            return squares[a];
        }
    }
        // итерируем массив - если ячейка true, т.е там что-то лежит - то значит ничия
    if (squares.every(square => !!square)){
        return 'Draw';
    }

    return null;
}


export const {handleClick} = gameSlice.actions;
export const selectedSquares = ((state: RootState) => state.game.squares);
export default gameSlice.reducer;