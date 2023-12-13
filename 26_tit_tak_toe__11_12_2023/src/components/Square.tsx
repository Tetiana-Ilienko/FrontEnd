import React from 'react';

interface ISquareProps{
    value: 'X' | 'O' | null;
    handleClick: () => void
}

const Square: React.FC<ISquareProps> = ({value, handleClick}) => {
  const styleBtn = `btn btn-light square ${value}`
  return (
    <button className={styleBtn} onClick={handleClick}>{value}</button>
  )
}

export default Square