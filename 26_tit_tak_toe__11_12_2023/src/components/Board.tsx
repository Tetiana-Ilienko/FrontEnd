import React from 'react'
import Square from './Square'
import { useDispatch, useSelector } from 'react-redux'
import { calculateWinner, handleClick, selectedSquares } from '../redux/gameSlice'

const Board = () => {
  const squares = useSelector(selectedSquares);
  const dispatch = useDispatch();
  const winner = calculateWinner(squares);

  const renderSquare = (index: number) => {
    return <Square value={squares[index]} handleClick={() => dispatch(handleClick(index))} />
  };

  const renderResult = (): JSX.Element | null => {
    switch (winner) {
      case 'Draw':
        return <div> It's a draw</div>;
      case 'O':
      case 'X':
        return <div>Winner: {winner}</div>;

      default:
        return null;
    }
  }
  return (
    <div className='board'>
      <div className='boar-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div>

        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
        {/* <Square value={squares[6]} handleClick={() => dispatch(handleClick(6))} />
        <Square value={squares[7]} handleClick={() => dispatch(handleClick(7))} />
        <Square value={squares[8]} handleClick={() => dispatch(handleClick(8))} /> */}
      </div>
      <div className='controls'>
        {renderResult()}
        <button className="btn btn-success" onClick={() => dispatch(handleClick(-1))}>Restart</button>
      </div>
    </div>
    //<Square value={'X'} handleClick={()=>{}}/>
  )
}

export default Board