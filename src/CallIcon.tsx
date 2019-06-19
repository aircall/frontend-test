import './CallIcon.scss';

import * as React from 'react';

import { Call } from './shared/call.model';

type CallIconProps = {
  call: Call;
};

class CallIcon extends React.Component<CallIconProps> {
  render() {
    const call = this.props.call;

    return (
      <div className='call-icon'
        data-direction={call.direction}
        data-call-type={call.callType}>
        <span className='fa fa-phone call-icon__phone'></span>
        <span className='fa fa-long-arrow-down call-icon__inbound'></span>
        <span className='fa fa-long-arrow-up call-icon__outbound'></span>
      </div>
    );
  }
}

export default CallIcon;
