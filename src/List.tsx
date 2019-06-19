import './List.scss';

import * as React from 'react';

import { Call } from './shared/call.model';
import { getDisplayName, getTimeAsString, getViaDesc, getDateAsString } from './shared/utils';
import CallIcon from './CallIcon';

type ListProps = {
  calls: ReadonlyArray<Call>;
  onSelect: (callId: number) => any;
};

class List extends React.Component<ListProps> {
  getCalls(calls: ReadonlyArray<Call>) {
    return calls.map(
      (call) => (
        <div className='call'
          data-direction={call.direction}
          data-call-type={call.callType}
          onClick={this.props.onSelect.bind(null, call.id)}
          key={call.id}>
          <CallIcon call={call}/>
          <div className='call__info'>
            <div className='call__name'>{getDisplayName(call)}</div>
            <div className='call__via'>{getViaDesc(call)}</div>
          </div>
          <div className='call__time'>{getTimeAsString(call.createdAt)}</div>
        </div>
      ),
    );
  }

  render() {
    const groupedCalls = this.props.calls.reduce((acc, call) => {
      if (!acc.length || call.creationDay.getTime() !== acc[acc.length - 1].day.getTime()) {
        acc.push({ day: new Date(call.creationDay), calls: [] });
      }
      acc[acc.length - 1].calls.push(call);
      return acc;
    }, [] as Array<{ day: Date, calls: Call[] }>);

    const list = groupedCalls.map(
      (group) => (
        <div className='call-group'>
          <div className='call-group__name'>{getDateAsString(group.day)}</div>
          <div className='call-group__calls'>{this.getCalls(group.calls)}</div>
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
