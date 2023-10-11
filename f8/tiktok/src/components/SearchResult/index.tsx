import React from 'react'
import clsx from 'clsx'
import styles from './SearchResult.module.scss'

interface Props {
  icon?: string,
  content: string 
}
const SearchResult: React.FC<Props>= ({icon, content}) => {
  if(icon){
    return (
      <div className={clsx(styles.wrapper)}>
        <img className={clsx(styles.icon)} src={icon} alt='fire'/>
        <p className={clsx(styles.content)}>{content}</p>
      </div>
    )
  }
  else{
    return (
      <div className={clsx(styles.wrapper)}>
        <div className={clsx(styles['wrapper-icon'])}>
          <div className={clsx(styles['icon-default'])}/>
        </div>
        <p className={clsx(styles.content)}>{content}</p>
      </div>
    )
  }
  
}

export default SearchResult
