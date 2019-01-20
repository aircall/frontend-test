import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import styles from './style.css';

export class ActivityListItem extends React.PureComponent {
  state = {
    time: ''
  };
  icons = {
    inbound: <i className="fas fa-phone"/>,
    outbound: <i className="fas fa-headset"/>
  };

  static getDerivedStateFromProps(props) {
    return {
      time: moment(props.activity.createdAt).format('HH:mm')
    }
  }

  render() {
    const { activity } = this.props;
    const { time } = this.state;

    return (
      <Link className={styles.link} to={`/activities/${activity.id}`}>
        <div className={styles.container}>
          {this.icons[activity.direction]}
          {activity.direction === 'inbound' ? activity.from : activity.to}
          <div className={styles.time}>
            {time}
          </div>
        </div>
      </Link>
    );
  }
}