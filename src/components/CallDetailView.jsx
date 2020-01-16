/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { archiveCall, closeDetail } from '../store/actions/appStateActions';

const CallDetailView = (props) => {
  const {
    id,
    createdAt,
    direction,
    callTo,
    callFrom,
    via,
    callType,
  } = props;

  const dispatch = useDispatch();

  const archiveAndClose = () => {
    dispatch(archiveCall(id));
    dispatch(closeDetail());
  };

  return (
    <div className="list-detail">
      <button type="button" onClick={() => dispatch(closeDetail())}>ugly X</button>
      <button type="button" onClick={() => archiveAndClose()}>archiveCall</button>
      <section>
        <div>
          <strong>Call from :</strong>
          {' '}
          {callFrom}
        </div>
        <div>
          <strong>Call to :</strong>
          {' '}
          {callTo}
        </div>
        <strong>Time of call :</strong>
        {' '}
        {createdAt}
        <div>
          <strong>Direction :</strong>
          {' '}
          {direction}
        </div>
        <div>
          <strong>Via :</strong>
          {' '}
          {via}
        </div>
        <div>
          <strong>Call type :</strong>
          {' '}
          {callType}
        </div>
      </section>
    </div>
  );
};

CallDetailView.propTypes = {
  id: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  callTo: PropTypes.string,
  callFrom: PropTypes.string,
  via: PropTypes.string.isRequired,
  callType: PropTypes.string,
};

CallDetailView.defaultProps = {
  callFrom: '',
  callTo: '',
  callType: '',
};

export default CallDetailView;
