// Libraries
import React from 'react';
// Styles
import './call.css'

/**
 * Simply View Component that renders a Call entry.
 */
const Call = ({
  call
}) => {
  return (
    <div className='call-container'>
      <ul className="call-info">
        <li>{call.call_type}</li>
        <li>{call.direction}</li>
        <li>{call.duration}</li>
        <li>{call.from}</li>
        <li>{call.to}</li>
        <li>{call.is_archived}</li>
      </ul>
    </div>
  );
};

export default Call;
