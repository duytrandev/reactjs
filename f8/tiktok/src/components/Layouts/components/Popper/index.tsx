import clsx from 'clsx'
import React, { ReactNode } from 'react'
import styles from './Popper.module.scss'

interface Props{
  children: ReactNode
}
const Popper: React.FC<Props> = ({children}) => {
  return (
    <div className={clsx(styles.wrapper)}>
      {children}
    </div>
  )
}

export  {Popper}

