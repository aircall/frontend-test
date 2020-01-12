import React from 'react';
import { IntlProvider } from 'react-intl';
import { ActivitiesProvider } from './context/index';
import Header from './Header';
import Feed from './Feed';
import styles from './css/app.css';

export default () => (
  <IntlProvider locale={navigator.language}>
    <ActivitiesProvider>
      <div className={styles.container}>
        <Header />
        <Feed />
      </div>
    </ActivitiesProvider>
  </IntlProvider>
);
