import React from 'react';
import moment from 'moment';

import styles from './style.css';

export class ActivityDetailItem extends React.PureComponent {
  state = {
    time: ''
  };
  statuses = {
    missed: 'Missed',
    answered: 'Answered',
    voicemail: 'Voice Mail'
  };
  icons = {
    inbound: <i className="fas fa-phone"/>,
    outbound: <i className="fas fa-headset"/>
  };

  static getDerivedStateFromProps(props) {
    return {
      time: moment(props.activity.createdAt).format('MMMM, DD YYYY at HH:mm'),
      duration: moment("1994-09-11").startOf('day')
        .seconds(+props.activity.duration || 0)
        .format('H:mm:ss')
    }
  }

  render() {
    const { activity, onSwitchArchived } = this.props;
    const { time, duration } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.time}>
          {time}
        </div>
        <div>
          {this.icons[activity.direction]}
        </div>
        <div className={styles.infoContainer}>
          <div>
            From
          </div>
          <div>
            {activity.from || 'Unknown'}
          </div>
        </div>
        <div className={styles.infoContainer}>
          <div>
            To
          </div>
          <div>
            {activity.to || 'Unknown'}
          </div>
        </div>
        <div className={styles.infoContainer}>
          <div>
            Status
          </div>
          <div>
            {this.statuses[activity.callType]}
          </div>
        </div>
        <div className={styles.infoContainer}>
          <div>
            Duration
          </div>
          <div>
            {duration}
          </div>
        </div>
        <div className={styles.infoContainer}>
          <div>
            Via
          </div>
          <div>
            {activity.via || 'Unknown'}
          </div>
        </div>
        <button className={styles.archiveButton} onClick={onSwitchArchived}>
          {activity.isArchived ? 'Unarchive' : 'Archive'}
        </button>
      </div>
    );
  }
}