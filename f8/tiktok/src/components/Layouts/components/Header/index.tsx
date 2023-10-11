import React from 'react'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Tippy from '@tippyjs/react/headless';
import {Popper as SearchPopper} from '../Popper';
import styles from "./Header.module.scss"
import logo from "../../../../../public/logo.svg"
import fire from "../../../../../public/fire.svg"
import SearchResult from '../../../SearchResult';

const Header:React.FC = () => {
  return (
    <header className={clsx({[styles['wrapper']]: true})}>
      <div className={clsx(styles['inner'])}>
        <img src={logo} className={styles.logo}/>
        <Tippy render={attrs => (
            <div className={clsx(styles['popper-wrapper'])} tabIndex={-1} {...attrs}>
              <SearchPopper>
                <span className={clsx(styles['title-poppup'])}>Bạn có thể thích</span>
                <SearchResult icon={fire} content='ronaldo'/>
                <SearchResult content='ronaldo'/>
                <SearchResult icon={fire} content='messi'/>
                <SearchResult icon={fire} content='ronaldo'/>
              </SearchPopper>
            </div>
          )} visible={true} interactive={true}>
          <div className={clsx(styles.search)}>
              <input className={clsx(styles['search-input'])} type="text" placeholder='Search accounts and videos' />
              <button className={clsx(styles['search__clear'])}>
                <FontAwesomeIcon icon={faCircleXmark as IconProp}/>
              </button>
              {/* <button className={clsx(styles['search__loading'])}>
                <FontAwesomeIcon icon={faSpinner as IconProp}/>
              </button> */}
                <button className={styles['search-btn']}>
                  <FontAwesomeIcon icon={faMagnifyingGlass as IconProp}/>
                </button>
          </div>
        </Tippy>
        <div className={clsx(styles.action)}></div>
      </div>
    </header>
  )
}

export default Header
