import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import format from 'date-fns/format'
import Call from './styled/call'
import CallLogIcon from './call_log_icon'
import { didMissCall } from 'utils/helpers'

const CallLogItem = ({ call, history }) => {
  const actionMessage = didMissCall(call.call_type) ? "tried to call on" : "called on";

  return (
    <Call onClick={() => history.push(`call/${call.id}`)}>
      <CallLogIcon callType={call.call_type} />
      <Call.ContactInfo>
        <Call.From>{call.from}</Call.From>
        {call.to && (
          <Call.To>
            {`${actionMessage} ${call.to}`}
          </Call.To>
        )}
      </Call.ContactInfo>
      <Call.Time>
        {format(call.created_at, 'HH:mm A')}
      </Call.Time>
    </Call>
  )
}

CallLogItem.propTypes = {
  call: PropTypes.shape({
    id: PropTypes.number,
    call_type: PropTypes.string,
    from: PropTypes.string,
    to: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired, // from react-router-dom
}

export default withRouter(CallLogItem)