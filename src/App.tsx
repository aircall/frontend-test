import './App.scss';

import * as React from 'react';

import Header from './Header';

const App = () => {
  return (
    <div className='app'>
      <Header/>
      <main>Some activities should be here</main>
    </div>
  );
};

export default App;
