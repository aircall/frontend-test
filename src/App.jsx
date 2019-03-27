import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header.jsx";
import ActivityFeed from "./ActivityFeed.jsx";
import ActivityDetail from "./ActivityDetail.jsx";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Route exact path="/" component={ActivityFeed} />
        <Route path="/detail/:id" component={ActivityDetail} />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
