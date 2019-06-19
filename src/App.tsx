import './App.scss';

import * as React from 'react';

import Header from './Header';
import List from './List';

const App = () => {
  return (
    <div className='app'>
      <Header/>
      <List/>
    </div>
  );
};

export default App;
