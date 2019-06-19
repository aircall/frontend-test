import './List.scss';

import * as React from 'react';

import { Call } from './shared/call.model';
import { getDateAsString, getDisplayName, getDurationAsString } from './shared/utils';

type ListProps = {
  calls: ReadonlyArray<Call>;
};

class List extends React.Component<ListProps> {
  render() {
    const list = this.props.calls.map(
      (call) => (
        <div key={call.id}>
          {getDisplayName(call)} ({call.direction}) - {getDateAsString(call.createdAt)} ({getDurationAsString(call.duration)})
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
