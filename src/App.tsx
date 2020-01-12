import React from 'react';
import Header from './Header';
import styles from './css/app.css';

export default () => (
  <div className={styles.container}>
    <Header />
    <div className={styles.view}>Some activities should be here</div>
  </div>
);
