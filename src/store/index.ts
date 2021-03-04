import { Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { rootReducer } from './reducer';
import { sagaMiddleware, rootSaga } from './saga';

export function configureStore(preloadedState: any = {}): Store {
  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);
  return createStore(rootReducer, preloadedState, composedEnhancers);
}

const store = configureStore();
sagaMiddleware.run(rootSaga);

export default store;
