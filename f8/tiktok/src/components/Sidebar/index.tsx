import React from 'react'
import clsx from 'clsx'
import styles from './Sidebar.module.scss'

const Sidebar = () => {
  return (
    <aside className={clsx(styles.wrapper)}>
      <h1>Side bar</h1>
    </aside>
  )
}

export default Sidebar
