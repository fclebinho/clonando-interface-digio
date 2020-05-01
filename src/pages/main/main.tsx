import React from 'react';

import {Header, Cards, Tabs, Entries} from '~/containers';
import {Container} from './styles';

export const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <Cards />
      <Tabs />
      <Entries />
    </Container>
  );
};

export default Main;
