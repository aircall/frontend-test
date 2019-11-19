import React, { useReducer, useEffect } from "react";
import ReactDOM from "react-dom";

import { defaultStore } from "../data/store";
import reducer from "../data/reducer";

import { FEED, FEED_SUCCESS, FEED_ERROR } from "../data/action";

import { Store } from "./StoreContext";

import Header from "./Header";
import Feed from "./Feed";
import FeedLoader from "./Feed/FeedLoader";
import FeedError from "./Feed/FeedError";

import fetch from "../utils/fetch";
import { dispatchHandler } from "../utils";

function App() {
  const [state, reducerDispatch] = useReducer(reducer, defaultStore);
  const dispatch = dispatchHandler(reducerDispatch);

  const {
    feed: { loading, data, error }
  } = state;

  useEffect(() => {
    dispatch(FEED);
    fetch
      .get("/activities")
      .then(data => dispatch(FEED_SUCCESS, data))
      .catch(error => dispatch(FEED_ERROR, error));
  }, []);

  return (
    <Store.Provider
      value={{
        state,
        dispatch
      }}
    >
      <div className="container">
        {loading && <FeedLoader />}
        {!loading && error && <FeedError />}
        {!loading && !error && data && (
          <>
            <Header />
            <div className="container-view">
              <Feed />
            </div>
          </>
        )}
      </div>
    </Store.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
