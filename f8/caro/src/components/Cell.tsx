import React from "react"

interface Props{
  value : string,
  handleClick: (e: React.MouseEvent<HTMLDivElement>)=> void
}

const Cell = ({value, handleClick}: Props)=>{
  return <div className="game-cell" onClick={handleClick}>{value}</div>
}

export default Cell