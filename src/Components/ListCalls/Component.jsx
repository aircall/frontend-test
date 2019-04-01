import React, { Component } from 'react'

import './style.css'

import ActivityList from '../ItemList/Container.jsx'

class Activities extends Component {
  async componentDidMount() {
    await this.props.fetchActivities()
  }

  render() {
    const { data, isLoading } = this.props

    return (
      <div className="activitiesCallsList">
        {isLoading ? (
          <p>Loading....</p>
        ) : data.activities ? (
          <ActivityList activitiesList={data.activities} />
        ) : null}
      </div>
    )
  }
}

export default Activities
