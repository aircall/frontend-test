import React from 'react';
import { connect } from 'react-redux';

import { ActivitiesCreators } from '../../actions';

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

  render() {
    const { fetching, error } = this.state;
    const { activities } = this.props;

    return (
      <div>
        {fetching && 'Loading...'}
        {error && 'Error :('}
        {!fetching && !error && JSON.stringify(activities)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  activities: state.activities.list
});

const mapDispatchToProps = (dispatch) => ({
  fetchActivities: () => dispatch(ActivitiesCreators.fetch())
});

ActivitiesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivitiesList);
