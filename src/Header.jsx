import React from 'react';
import Logo from './img/logo.svg';
import styles from './css/header.css';

export default () => (
  <header className={styles.header}>
    <Logo className={styles.logo}/>
  </header>
);
