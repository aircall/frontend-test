import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import sagas from "./sagas";
import reducer, { initialState } from "./reducer";

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [sagaMiddleware];

    const enhancers = composeWithDevTools(
        applyMiddleware(...middleware)
    );
    
    const store = createStore(reducer, initialState, enhancers);

    sagaMiddleware.run(sagas);

    return store;
};

export default configureStore();