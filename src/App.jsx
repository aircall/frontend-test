import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';
import Header from './components/Header/Header.jsx';

import styles from './style.css';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <Header/>
        <div className={styles.containerView}>
          Empty Store, waiting for a reducer
        </div>
      </div>
    </Provider>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
