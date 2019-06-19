import './List.scss';

import * as React from 'react';

import { Call } from './shared/call.model';
import { getDisplayName, getTimeAsString, getViaDesc } from './shared/utils';

type ListProps = {
  calls: ReadonlyArray<Call>;
  onSelect: (callId: number) => any;
};

class List extends React.Component<ListProps> {
  render() {
    const list = this.props.calls.map(
      (call) => (
        <div className='call'
          data-direction={call.direction}
          data-call-type={call.callType}
          onClick={this.props.onSelect.bind(null, call.id)}
          key={call.id}>
          <div className='call__icon'>
            <span className='fa fa-phone call__icon-phone'></span>
            <span className='fa fa-long-arrow-down call__icon-inbound'></span>
            <span className='fa fa-long-arrow-up call__icon-outbound'></span>
          </div>
          <div className='call__info'>
            <div className='call__name'>{getDisplayName(call)}</div>
            <div className='call__via'>{getViaDesc(call)}</div>
          </div>
          <div className='call__time'>{getTimeAsString(call.createdAt)}</div>
        </div>
      ),
    );

    return (
      <main>
        {list}
      </main>
    );
  }
}

export default List;
