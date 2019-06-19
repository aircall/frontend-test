import './App.scss';

import * as React from 'react';

import Header from './Header';
import List from './List';
import Detail from './Detail';
import { getCalls, archiveCall, resetArchivedStatus } from './shared/api';
import { Call } from './shared/call.model';

type AppState = {
  calls: ReadonlyArray<Call>;
  selectedCall?: Call;
  hasArchivedCalls: boolean;
};

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      calls: [],
      hasArchivedCalls: false,
    };

    getCalls()
      .then((calls) => this.setState({
        calls: calls.filter(({ isArchived }) => !isArchived),
        hasArchivedCalls: calls.some(({ isArchived }) => isArchived),
      }))
    ;
  }

  selectCall(callId?: number) {
    this.setState({
      ...this.state,
      selectedCall: callId ? this.state.calls.find(({ id }) => id === callId) : undefined,
    });
  }

  archiveSelectedCall() {
    if (!this.state.selectedCall) {
      return ;
    }
    const callId = this.state.selectedCall.id;
    archiveCall(callId)
      .then(() => this.setState({
        calls: this.state.calls.filter(({ id }) => id !== callId),
        selectedCall: undefined,
        hasArchivedCalls: true,
      }))
    ;
  }

  resetArchivedStatus() {
    resetArchivedStatus()
      .then(() => getCalls())
      .then((calls) => this.setState({
        ...this.state,
        calls: calls.filter(({ isArchived }) => !isArchived),
        hasArchivedCalls: calls.some(({ isArchived }) => isArchived),
      }))
    ;
  }

  render() {
    const className = [
      'app',
      ...(this.state.selectedCall ? ['app--detail-visible'] : []),
      ...(this.state.hasArchivedCalls ? ['app--has-archived-calls'] : []),
    ].join(' ');

    return (
      <div className={className}>
        <Header/>
        <List calls={this.state.calls}
          onSelect={this.selectCall.bind(this)}/>
        <Detail call={this.state.selectedCall}
          onClose={this.selectCall.bind(this)}
          onArchive={this.archiveSelectedCall.bind(this)}/>
        <footer>
          <button className='app__reset' onClick={this.resetArchivedStatus.bind(this)}>Reset archived status</button>
        </footer>
      </div>
    );
  }
}

export default App;
