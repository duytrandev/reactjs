import React from "react";
import Cell from "./Cell";

interface Props {
  board: string[],
  handleClick: (index: number) => void
}

const Board: React.FC<Props> = ({board, handleClick}: Props) => {
  return (
    <div className="game-board">
      {board.map((element, index)=>{
        return <Cell key={index} handleClick={()=>{
          handleClick(index)}
        } value={element} />
      })}
    </div>
  )
};

export default Board