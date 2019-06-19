import './CallTile.scss';

import * as React from 'react';

import { Call } from './shared/call.model';
import { getDisplayName, getTimeAsString, getViaDesc } from './shared/utils';
import CallIcon from './CallIcon';

type CallProps = {
  call: Call;
  onClick: () => any;
};

class CallTile extends React.Component<CallProps> {
  render() {
    const call = this.props.call;

    return (
      <div className='call'
        data-direction={call.direction}
        data-call-type={call.callType}
        onClick={this.props.onClick.bind(null, call.id)}>
        <CallIcon call={call}/>
        <div className='call__info'>
          <div className='call__name'>{getDisplayName(call)}</div>
          <div className='call__via'>{getViaDesc(call)}</div>
        </div>
        <div className='call__time'>{getTimeAsString(call.createdAt)}</div>
      </div>
    );
  }
}

export default CallTile;
