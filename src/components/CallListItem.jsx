/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { archiveCall, openDetail } from '../store/actions/appStateActions';

const CallListItem = (props) => {
  const {
    id,
    createdAt,
    callTo,
    callFrom,
  } = props;

  const dispatch = useDispatch();

  return (
    <div tabIndex={id} className="callDetails">
      <div className="pretend_icon">
      pretend I&apos;m
        <br />
      a phone
      </div>
      <section>
        <div>{callFrom}</div>
        <div>{callTo}</div>
        {createdAt}
      </section>
      <button type="button" onClick={() => dispatch(openDetail(id))}>detail</button>
      <button type="button" onClick={() => dispatch(archiveCall(id))}>archive call</button>
    </div>
  );
};

CallListItem.propTypes = {
  id: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  callTo: PropTypes.string,
  callFrom: PropTypes.string.isRequired,
};

CallListItem.defaultProps = {
  callTo: '',
};

export default CallListItem;
