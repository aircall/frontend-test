import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.css';


import ActivityList from './../ItemList/Container'

class Activities extends Component {

  async componentDidMount() {
    await this.props.fetchActivities();
  }

  render (){
    const { data ,isLoading, currentNav} = this.props;

    return(
      <div className="activitiesCallsList">
        { isLoading ? (<p>Loading....</p>):
          (data.activities ? <ActivityList activitiesList={data.activities} /> : null)
        }
      </div>
    )
  }
}

export default Activities;
