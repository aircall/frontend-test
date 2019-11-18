import React from "react";
import ReactDOM from "react-dom";

import { defaultStore } from "../data/store";
import reducer from "../data/reducer";

import { Store } from "./StoreContext";

import Header from "./Header";

import { dispatchHandler } from "../utils";

function App() {
  const [state, dispatch] = useReducer(reducer, defaultStore);

  return (
    <Store.Provider
      value={{
        state,
        dispatch: dispatchHandler(dispatch)
      }}
    >
      <div className="container">
        <Header />
        <div className="container-view">Some activities should be here</div>
      </div>
    </Store.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
