/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { archiveCall } from '../store/actions/appStateActions';

const CallListItem = (props) => {
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

  const callDateObj = new Date(createdAt);

  return (
    <details>
      <summary tabIndex={id}>
        <div className="pretend_icon">
          pretend I&apos;m
          <br />
          a phone
        </div>
        <section>
          <div>{callFrom}</div>
          <div>{callTo}</div>
          {callDateObj.toLocaleTimeString()}
        </section>
        <button type="button" onClick={() => dispatch(archiveCall(id))}>archive call</button>
      </summary>
      <section>
        <h4>Details</h4>
        <div>{direction}</div>
        <div>{via}</div>
        <div>{callType}</div>
      </section>
    </details>
  );
};

CallListItem.propTypes = {
  id: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  callTo: PropTypes.string.isRequired,
  callFrom: PropTypes.string.isRequired,
  via: PropTypes.string.isRequired,
  callType: PropTypes.string.isRequired,
};

export default CallListItem;
