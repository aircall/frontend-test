import React, { Component } from 'react';

import ActivityDetail from '../components/ActivityDetail.jsx';

class ActivityDetailContainer extends Component {
	constructor(props){
		super(props)
    this.state = {
      activity: {}
    }
    this.formatDuration = this.formatDuration.bind(this);
    this.formatMessage = this.formatMessage.bind(this);
    this.formatTime = this.formatTime.bind(this);
	}

  componentWillMount() {
    // retrieve id specific activity
    fetch(`https://aircall-job.herokuapp.com/activities/${this.props.match.params.id}`)
    .then(res => {
      return res.json()
    })
    .then(data => {
      this.setState({activity: data})
    })
    .catch(err => console.error(err));
  }

  formatDuration(time) {
    // should account for seconds and hours
    return (Number(time) / 60) + ' minutes';
  }

  formatMessage(message) {
    if(message === 'missed') return 'Missed Call'
    if(message === 'answered') return 'Answered Call'
    if(message === 'voicemail') return 'Voicemail'
  }

  formatTime(created_at) {
    const timestamp = new Date(created_at);
    return [
      timestamp.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      timestamp.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    ]
  }

	render() {
    const activity = this.state.activity;
		return (activity)
      ? (
        <ActivityDetail
        activity={activity}
        time={() => this.formatTime(activity.created_at)}
        duration={() => this.formatDuration(activity.duration)}
        message={() => this.formatMessage(activity.call_type)} />
      )
      : null
  }
}

export default ActivityDetailContainer;
