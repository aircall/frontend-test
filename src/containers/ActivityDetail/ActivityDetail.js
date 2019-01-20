import React from 'react';
import { connect } from 'react-redux';

import { ActivitiesCreators } from '../../actions';

import styles from './style.css';
import { ActivityDetailItem } from '../../components/ActivityDetailItem/ActivityDetailItem';

export class ActivityDetail extends React.PureComponent {
  state = {
    fetching: false,
    error: false
  };

  componentDidMount() {
    this.getActivity();
  }

  getActivity = () => {
    this.setState({ fetching: true, error: false },  () => {
        this.props.getActivity()
          .then(() => this.setState({ fetching: false, error: false }))
          .catch((err) => console.error(err) || this.setState({ fetching: false, error: true }));
    })
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

  switchArchived = () => {
    this.props.setArchived(!this.props.activity.isArchived)
      .catch(err => console.error(err));
  };

  render() {
    const { fetching, error } = this.state;
    const { activity } = this.props;

    return (
      <div>
        {fetching && this.renderLoading()}
        {error && this.renderError()}
        {activity && !fetching && !error && <ActivityDetailItem activity={activity} onSwitchArchived={this.switchArchived}/>}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  activity: state.activities.list.find(item => item.id === +ownProps.match.params.id)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getActivity: () => dispatch(ActivitiesCreators.getById(+ownProps.match.params.id)),
  setArchived: (isArchived) => dispatch(ActivitiesCreators.updateArchivedState(+ownProps.match.params.id, isArchived))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityDetail);
