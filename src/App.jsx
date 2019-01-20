import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store';
import { MainRouter } from './routes/main';

import styles from './style.css';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <MainRouter/>
      </div>
    </Provider>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
