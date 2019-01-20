import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

// Enables Redux-Devtools debugger if available
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

const configureStore = (preloadedState) =>
    createStore(
        rootReducer,
        preloadedState,
        composeEnhancers(applyMiddleware(...middleware))
    );

export default configureStore;
