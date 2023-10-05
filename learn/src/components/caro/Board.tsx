import React from 'react'
import Cell from './Cell'

interface Props{
  board: string[]
  handleClick: (index: number)=>void
}
const Board: React.FC<Props> = ({board, handleClick}: Props) => {
  return (
    <div className='game-board'>
      {board.map((cell, index)=>{
        return <Cell key={index} value={cell} handleClick={()=>{
          handleClick(index)
        }}></Cell>
      })}
    </div>
  )
}

export default Board
