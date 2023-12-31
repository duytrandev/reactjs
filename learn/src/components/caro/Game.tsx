import React, { useState } from 'react'
import { selectWinner } from './selectWinner'
import Board from './Board'
import './gameStyle.css'
import ButtonReset from './ButtonReset'
let idInterval: number

const Game: React.FC = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState<boolean>(true)
  // const [win, setWin] = useState(false)
  console.log('re render', board)
  const winner = selectWinner(board)

  const handleClick = (index: number) => {
    if (winner || board[index]) return
    board[index] = xIsNext ? 'X' : 'O'
    setXIsNext((prev) => {
      return !prev
    })
    setBoard(board)
  }
  const handleReset = () => {
    setBoard(Array(9).fill(null))
    console.log(idInterval)
    clearInterval(idInterval)
  }
  return (
    <div className='game'>
      <Board board={board} handleClick={handleClick} />
      {/* <p>{countDown}</p> */}
      <ButtonReset handleReset={handleReset} />
    </div>
  )
}

export default Game
