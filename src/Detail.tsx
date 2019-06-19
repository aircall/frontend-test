import './Detail.scss';

import * as React from 'react';

import { Call } from './shared/call.model';
import { getDisplayName, getTimeAsString, getViaDesc } from './shared/utils';

type DetailProps = {
  call?: Call;
  onClose: () => any;
};

class Detail extends React.Component<DetailProps> {
  render() {
    const call = this.props.call;

    if (!call) {
      return <article></article>;
    }

    return (
      <article>
        <button onClick={this.props.onClose}>close</button><br/>
        {call.id}
      </article>
    );
  }
}

export default Detail;
