import './App.scss';

import * as React from 'react';

import Header from './Header';
import List from './List';
import { getCalls } from './shared/api';
import { Call } from './shared/call.model';

type AppState = {
  calls: ReadonlyArray<Call>;
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

  render() {
    return (
      <div className='app'>
        <Header/>
        <List calls={this.state.calls}/>
      </div>
    );
  }
}

export default App;
