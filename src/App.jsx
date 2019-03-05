import React, { Component } from 'react';
import Header from './components/Common/Header.jsx';
import Footer from './components/Common/Footer.jsx';
import ActivityFeed from './Pages/Activity/ActivityFeedContainer.jsx';
import ActivityDetail from './Pages/Activity/ActivityDetailContainer.jsx';
import { clearInterval } from 'timers';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: null,
      showDetail: false,
    }
  }

  componentDidMount() {
    const { getActivities } = this.props;
    getActivities();

    let timer = setInterval(getActivities, 60000);
    this.setState({ timer });
  }

  componentWillUnmount() {
    const { timer } = this.state;
    clearInterval(timer);
  }

  render() {
    const { activity } = this.props;
    const { activities } = activity;
    
    return (
      <Router>
        <div className='container'>
          <Header />
          <div className="container-view">
            <Route path="/" exact render={props => <ActivityFeed {...props} /> } />
            <Route path="/:id" render={props => <ActivityDetail {...props} activities={activities} /> } />
          </div>
          <Footer activities={activities} />
        </div>
      </Router>
      
    );
  }
};

export default App;
