import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { HashRouter as Router, Route } from "react-router-dom";

import Header from "./Header.jsx";
import ActivityFeed from "./activity-feed/ActivityFeedContainer";
import CallDetail from "./call-detail/CallDetailContainer";
import rootReducer from "./reducers";

const middleware = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, middleware);

const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <Header />
        <div className="container-view">
          <Router>
            <Route exact path="/" component={ActivityFeed} />
            <Route
              exact
              path="/call-detail/:activityId"
              component={CallDetail}
            />
          </Router>
        </div>
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
