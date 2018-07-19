import React from 'react';
import PropTypes from 'prop-types';
import { MdCallReceived, MdCallMade } from 'react-icons/lib/md';

import { ACTIVITY_DIRECTION } from '../../models/Activity';

import './activity-direction.css';

const propTypes = {
  direction: PropTypes.string.isRequired,
  callType: PropTypes.string.isRequired,
};

class ActivityDirection extends React.PureComponent {
  render() {
    const { direction, callType } = this.props;
    let renderedDirection;
    switch (direction) {
      case ACTIVITY_DIRECTION.inbound:
        renderedDirection = <MdCallReceived />;
        break;
      case ACTIVITY_DIRECTION.outbound:
        renderedDirection = <MdCallMade />;
        break;
      default:
        renderedDirection = null;
    }
    const className = `activity-direction ${callType}`;
    return (
      <div className={className}>
        { renderedDirection }
      </div>
    );
  }
}

ActivityDirection.propTypes = propTypes;

export default ActivityDirection;
