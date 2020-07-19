import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchListRequest, FETCH_STATUS } from '../store/callsSlice';
import { bindActionCreators, Dispatch } from 'redux';

import { getFeed, getStatus, getError } from './selectors';
import CallItem from './components/CallItem';
import { DateLabel, DateWrapper, FeedWrapper } from './styledComponents';
import { State } from '../store/reducer';

function mapStateToProps(state: State) {
  return {
    feed: getFeed(state),
    status: getStatus(state),
    error: getError(state),
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({ fetchListRequest }, dispatch);
}

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const Feed = ({ feed, status, error, fetchListRequest }: Props) => {
  useEffect(() => {
    fetchListRequest();
  }, []);

  if (status === FETCH_STATUS.FETCHING) {
    return <div>loading ...</div>;
  }

  if (status === FETCH_STATUS.ERROR) {
    return <div>{error}</div>;
  }

  return (
    <FeedWrapper>
      {Object.keys(feed).map((key) => {
        return (
          <div key={feed[key].date} data-testid="group-by-date">
            <DateWrapper>
              <DateLabel>{feed[key].date}</DateLabel>
            </DateWrapper>
            {feed[key].ids.map((id) => (
              <CallItem id={id} key={id} />
            ))}
          </div>
        );
      })}
    </FeedWrapper>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
