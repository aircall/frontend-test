import React from 'react';
import 'jest-styled-components';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router';
import createSagaMiddleware from 'redux-saga';
import { createStore, compose, applyMiddleware } from 'redux';
import { render } from '@testing-library/react';
import { createMemoryHistory, createLocation } from 'history';

import { rootReducer } from '../store/reducer';
import { rootSaga } from '../store/saga';
import { theme } from '../theme';

const getStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, initialState, compose(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(rootSaga);
  return store;
};

type Options = {
  pathname?: string;
  [key: string]: any;
};

const customRender = (ui, options: Options = {}) => {
  const { pathname } = options;
  /**
   * initialize the history with the given location so we can simulate that
   * the user enters a specific URL
   */
  const history = createMemoryHistory();
  history.push(createLocation(pathname));
  const AllTheProviders = ({ children }: { children: React.ReactChildren }) => {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={getStore({})}>
          <Router history={history}>{children}</Router>
        </Provider>
      </ThemeProvider>
    );
  };

  return render(ui, { wrapper: AllTheProviders, ...options });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
