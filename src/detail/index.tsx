import React, { useEffect } from 'react';
import { RouteChildrenProps } from 'react-router-dom';
import { connect } from 'react-redux';

import { State } from '../store/reducer';
import { fetchOneRequest } from '../store/callsSlice';
import DetailContent from './components/DetailContent';
import { getCallById } from '../store/selectors';
import { bindActionCreators, Dispatch } from 'redux';

function mapStateToProps(state: State, { match }: RouteChildrenProps<{ id: string }>) {
  return {
    call: getCallById(state, match.params.id),
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({ fetchOneRequest }, dispatch);
}

export type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  RouteChildrenProps<{ id: string }>;

export const Detail = ({ fetchOneRequest, call, match }: Props) => {
  const id = match.params.id;
  useEffect(() => {
    if (call === undefined) {
      fetchOneRequest(id);
    }
  }, [call, id, fetchOneRequest]);
  //TODO: display loader when loading
  //TODO: display error message if failed to fetch
  if (call === undefined) return null;
  return <DetailContent call={call} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
