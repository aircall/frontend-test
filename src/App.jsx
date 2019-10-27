import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import Header from './Header.jsx';
import Feed from './pages/Feed.jsx';

import reducers from './reducers';
import saga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(saga);

const App = () => (
  <Provider store={store}>
    <div className="container">
      <Header />
      <div className="container-view">
        <Feed />
      </div>
    </div>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
