import React from 'react';
import moment from 'moment';

import styles from './style.css';

export class ActivityDateHeader extends React.PureComponent {
  state = {
    date: ''
  };

  static getDerivedStateFromProps(props) {
    return {
      date: moment(props.date).format('MMMM, DD YYYY')
    }
  }

  render() {
    let { date } = this.state;

    return (
      <div className={styles.container}>
        {date}
      </div>
    );
  }
}
