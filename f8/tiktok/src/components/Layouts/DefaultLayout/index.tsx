import React, { ReactNode } from 'react';
import clsx from 'clsx';

import Header from '../components/Header';
import Sidebar from '../../Sidebar';
import styles from "./DefaultLayout.module.scss"

interface Props {
  children: ReactNode;
}
const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={clsx(styles['wraper'])}>
      <Header />
      <div className={clsx(styles['container'])}>
        <Sidebar />
        <div className={clsx(styles.content)}>{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
