// Libraries
import React from 'react';
// Components
import ArchiveButton from '../CallArchiver/CallArchiver.jsx'
// Styles
import './call.css'

/**
 * Simply View Component that renders a Call entry.
 */
const Call = ({
  call
}) => {
  return (
    <div className={`call-container ${call.call_type}`}>
      <ul className="call-infos">
        <li className="call-info">From: {call.from || 'Unknown'}</li>
        <li className="call-info">To: {call.to || 'Unknown'}</li>
      </ul>
      <ArchiveButton callId={call.id} />
    </div>
  );
};

export default Call;
