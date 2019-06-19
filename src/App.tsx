import './App.scss';

import * as React from 'react';

import Header from './Header';
import List from './List';
import Detail from './Detail';
import { getCalls } from './shared/api';
import { Call } from './shared/call.model';

type AppState = {
  calls: ReadonlyArray<Call>;
  selectedCall?: Call;
};

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      calls: [],
    };

    getCalls()
      .then((calls) => this.setState({ calls }))
    ;
  }

  selectCall(callId?: number) {
    this.setState({
      ...this.state,
      selectedCall: callId ? this.state.calls.find(({ id }) => id === callId) : undefined,
    });
  }

  render() {
    const className = [
      'app',
      ...(this.state.selectedCall ? ['app--detail-visible'] : []),
    ].join(' ');

    return (
      <div className={className}>
        <Header/>
        <List calls={this.state.calls} onSelect={this.selectCall.bind(this)}/>
        <Detail call={this.state.selectedCall} onClose={this.selectCall.bind(this)}/>
      </div>
    );
  }
}

export default App;
