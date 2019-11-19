import React, { useReducer } from "react";
import ReactDOM from "react-dom";

import { defaultStore } from "../data/store";
import reducer from "../data/reducer";

import { Store } from "./StoreContext";

import Header from "./Header";
import Feed from "./Feed";

import { dispatchHandler } from "../utils";

function App() {
  const [state, reducerDispatch] = useReducer(reducer, defaultStore);
  const dispatch = dispatchHandler(reducerDispatch);

  return (
    <Store.Provider
      value={{
        state,
        dispatch
      }}
    >
      <div className="container">
        <Header />
        <div className="container-view">
          <Feed />
        </div>
      </div>
    </Store.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
