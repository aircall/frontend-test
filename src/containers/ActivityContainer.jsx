import React, { Component } from 'react';
import { MdPhoneMissed, MdPhoneInTalk, MdVoicemail, MdArchive } from 'react-icons/md';

import Activity from '../components/Activity.jsx';

class ActivityContainer extends Component {
	constructor(props){
		super(props)
    this.state = {
      activities: []
    }
    this.formatTime = this.formatTime.bind(this);
    this.setIcon = this.setIcon.bind(this);
    this.archiveActivity = this.archiveActivity.bind(this);
    this.resetArchive = this.resetArchive.bind(this);
	}

  componentWillMount() {
    // retrieve data and add it to state
    fetch('https://aircall-job.herokuapp.com/activities')
    .then(res => res.json())
    .then(data => {
      const parsedData = data.filter(activity => !activity.is_archived );
      this.setState({ activities: parsedData })
    })
    .catch(err => console.error(err));
  }

  formatTime(timestamp) {
    // format the timestamp to hour:minute
    const formatTime = new Date(timestamp);
    return formatTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  }

  setIcon(call_type) {
    if(call_type === 'missed') return <div><MdPhoneMissed size={24} /></div>
    else if (call_type === 'voicemail') return <div><MdVoicemail size={24} /></div>
    else if (call_type === 'answered') return <div><MdPhoneInTalk size={24} /></div>
    // else edgecase catch. Generic icon or no icon?
  }

  archiveActivity(id, index) {
    fetch(`https://aircall-job.herokuapp.com/activities/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ is_archived: true })
    })
    .then(res => res.json())
    .then(data => {
      // Remove archived activity from the.state.activities
      let activities = this.state.activities;
      activities.splice(index, 1);
      this.setState({ activities: activities }); // Rerender
    })
    .catch(err => console.error(err));
  }

  resetArchive() {
    fetch('https://aircall-job.herokuapp.com/reset')
    .then(res => res.json()) // Does not respond with activities... fetch again
    .then(data => {
      fetch('https://aircall-job.herokuapp.com/activities')
      .then(res => res.json())
      .then(data => this.setState({ activities: data }))
    })
    .catch(err => console.error(err));
  }

	render() {
		return (
			<ul className="flex vertical">
        {
          this.state.activities
          .sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
          .map((activity, index) => {
            // Archive icon with click method to pass down in props
            const archiveIcon = (
              <span
                id="archive-icon"
                onClick={(e) => this.archiveActivity(activity.id, index)}>
                <MdArchive size={24} />
              </span>
            );
            return (
              <Activity
                key={activity.id}
                value={activity}
                time={this.formatTime(activity.created_at)}
                setIcon={this.setIcon}
                archiveIcon={archiveIcon} />
            )
          })
        }
        <button id="reset-btn" onClick={this.resetArchive}>Reset Activities</button>
      </ul>
    )
  }
}

export default ActivityContainer;
