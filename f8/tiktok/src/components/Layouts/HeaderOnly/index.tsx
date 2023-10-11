import React, { ReactNode } from 'react'
import Header from '../components/Header'

interface Props{
  children: ReactNode
}
const HeaderOnly:React.FC<Props> = ({children}) => {
  return (
    <div>
      <Header/>
      <div className="container">
        {children}
      </div>
    </div>
  )
}

export default HeaderOnly
