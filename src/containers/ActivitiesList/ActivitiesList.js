import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { ActivitiesCreators } from '../../actions';

import styles from './style.css';
import { ActivityDateHeader } from '../../components/ActivityDateHeader/ActivityDateHeader';
import { ActivityListItem } from '../../components/ActivityListItem/ActivityListItem';

export class ActivitiesList extends React.PureComponent {
  state = {
    fetching: false,
    error: false
  };

  componentDidMount() {
    this.fetchActivities();
  }

  fetchActivities = () => {
    this.setState({ fetching: true, error: false },  () => {
        this.props.fetchActivities()
          .then(() => this.setState({ fetching: false, error: false }))
          .catch(() => this.setState({ fetching: false, error: true }));
    })
  };

  setArchiveAll = (isArchived) => {
    this.props.activities.forEach(activity => this.props.setArchived(activity.id, isArchived)
      .catch(err => console.error(err)));
  };

  renderLoading = () => {
    return (
      <div className={styles.loader}>
        Loading...
      </div>
    );
  };

  renderError = () => {
    return (
      <div className={styles.error}>
        An error occured
        <button onClick={this.fetchActivities}>Retry</button>
      </div>
    );
  };

  renderDateHeader = (date) => {
    return (
      <ActivityDateHeader key={`date-header-${date}`} date={date}/>
    );
  };

  renderItem = (activity) => {
    return (
      <ActivityListItem key={`activity-item-${activity.id}`} activity={activity}/>
    );
  };

  renderItems = (activities) => {
    const areAllArchived = !this.props.activities.find(item => !item.isArchived);
    const children = [
      <button className={styles.archiveAllButton} onClick={() => this.setArchiveAll(!areAllArchived)}>
        <i className="fas fa-archive"/>
        {areAllArchived ? 'Unarchive all calls' : 'Archive all calls'}
      </button>
    ];
    let activityDate = null;
    for (const activity of activities) {
      const lastActivityDate = activityDate;
      activityDate = moment(activity.createdAt).format('DD-MM-YYYY');
      if (!activity.isArchived) {
        if (!lastActivityDate || activityDate !== lastActivityDate) {
          children.push(this.renderDateHeader(activity.createdAt))
        }
        children.push(this.renderItem(activity));
      }
    }
    return children;
  };

  render() {
    const { fetching, error } = this.state;
    const { activities } = this.props;

    return (
      <div>
        {fetching && this.renderLoading()}
        {error && this.renderError()}
        {!fetching && !error && this.renderItems(activities)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  activities: state.activities.list
});

const mapDispatchToProps = (dispatch) => ({
  fetchActivities: () => dispatch(ActivitiesCreators.fetch()),
  setArchived: (id, isArchived) => dispatch(ActivitiesCreators.updateArchivedState(id, isArchived))
});

ActivitiesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivitiesList);
