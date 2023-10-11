import React, { ReactNode } from 'react'
import "./GlobalStyle.scss"

interface Props{
  children: ReactNode
}

const GlobalStyle: React.FC<Props> = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default GlobalStyle
