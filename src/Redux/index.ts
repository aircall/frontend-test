import { createStore, applyMiddleware } from "redux";
import { default as thunk } from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";
import { default as reducers } from "./Reducers";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
