import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ReactDOM from 'react-dom';

import Header from './Header.jsx';
import ActivityList from './ActivityList.jsx';
import ActivityDetails from './ActivityDetails.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      fetching: false,
      activities: []
    };

    window.fetchState = this.fetchState.bind(this);
    window.updateActivity = this.updateActivity.bind(this);
  }

  componentDidMount() {
    this.fetchState();
  }

  updateActivity(id, archive) {
    this.setState({...this.state, fetching: true});
    fetch(`https://aircall-job.herokuapp.com/activities/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify({is_archived: archive})
    }).then((data) => {
      data.json().then((updatedActivity) => {
        var newList = this.replaceActivity(updatedActivity);
        this.setState({...this.state, fetching: false, activities: newList});
      });
    });
  }

  replaceActivity(newActivity) {
    return this.state.activities.map((currentEntry) => {
      if (currentEntry.id === newActivity.id) return newActivity;
      return currentEntry;
    })
  }



  fetchState() {
    console.log('load');
    this.setState({...this.state, fetching: true});
    fetch('https://aircall-job.herokuapp.com/activities').then((response) => {
        response.json().then((result) => {
            console.log(result);
            this.setState({...this.state, fetching: false, activities: result});
        })
    });
  }

  render() {
    return (
      <div className='container'>
        <Header fetching={this.state.fetching} />
        <Switch>
            <Route exact path='/' component={() => <ActivityList fetching={this.props.fetching} activities={this.state.activities} />}></Route>
            <Route exact path='/activity/:id' component={(props) => <ActivityDetails id={props.match.params.id} />}></Route>
        </Switch>
      </div>
    );
  }  
};

ReactDOM.render(<BrowserRouter>
<App/></BrowserRouter>, document.getElementById('app'));

export default App;
