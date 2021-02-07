import React, { FC, ReactNode } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

interface IProps {
  children: ReactNode;
}

const Header: FC = () => (
  <header className={styles.logo}>
    <Link href="/">
      <h1 className={styles.logoIsh}>
        Rotten <span>Guacamole</span>
      </h1>
    </Link>
  </header>
);

export default Header;
