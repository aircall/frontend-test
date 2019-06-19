import './List.scss';

import * as React from 'react';

import { Call } from './shared/call.model';
import { getDateAsString } from './shared/utils';
import CallTile from './CallTile';

type ListProps = {
  calls: ReadonlyArray<Call>;
  onSelect: (callId: number) => any;
};

class List extends React.Component<ListProps> {
  private getCalls(calls: ReadonlyArray<Call>) {
    return calls.map((call) => (
      <CallTile call={call}
        onClick={this.props.onSelect.bind(null, call.id)}
        key={call.id}/>
    ));
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
        <div className='call-group'
          key={group.day.getTime()}>
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
