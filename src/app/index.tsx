import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Routes from './components/Routes';
import Nav from './components/Nav';
import { Container } from './styledComponents';

const App = () => {
  return (
    <Router>
      <Container>
        <Header />
        <Routes />
        <Nav />
      </Container>
    </Router>
  );
};

export default App;
