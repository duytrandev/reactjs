import React, { useState } from 'react';
import './gameStyle.css'
import Board from './Board';
import { selectWinner } from '../helpers/selectWiner';

const Game:React.FC = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState<boolean>(true)
  const handleClick = (index: number)=>{
    const winner = selectWinner(board)
    if(winner || board[index]) return
    board[index] = xIsNext ? 'X' : 'O'
    setXIsNext((prev)=>{
      return !prev
    })
    console.log('re render')
    setBoard(board)
  }
  return <div><Board board={board} handleClick={handleClick}/></div>;
};  

export default Game;
