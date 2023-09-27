import React from 'react'

interface Props {
  value: string,
  handleClick: (event: React.MouseEvent<HTMLDivElement>) => void
}

const Cell:React.FC<Props> = ({value, handleClick}: Props) => {
  return (
    <div className='game-cell' onClick={handleClick}>
      {value}
    </div>
  )
}

export default Cell
