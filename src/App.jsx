import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {Route, Router} from "react-router-dom";
import reducers from "./reducers";
import ActivityFeed from "./components/ActivityFeed";
import ActivityDetail from "./components/ActivityDetail";
import history from "./history";

const App = () => {
    return (
        <div className='container'>
            <Router history={history}>
                <Header/>
                <div className="container-view">
                    <Route path='/' exact component={ActivityFeed}/>
                    <Route path='/activity/:id' component={ActivityDetail}/>
                </div>
            </Router>
        </div>
    );
};

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);

export default App;
