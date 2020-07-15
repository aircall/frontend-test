import React from 'react';

import Header from './Header';
import { Container, ContainerView } from './styledComponents';

const App = () => {
  return (
    <Container>
      <Header />
      <ContainerView>Some activities should be here</ContainerView>
    </Container>
  );
};

export default App;
