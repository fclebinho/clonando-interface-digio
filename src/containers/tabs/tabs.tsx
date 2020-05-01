import React from 'react';

import {Container, Tab, TabItem, TabItemText} from './styles';

export const Tabs: React.FC = () => {
  return (
    <Container>
      <Tab>
        <TabItem>
          <TabItemText active>Lançamentos</TabItemText>
        </TabItem>
        <TabItem>
          <TabItemText>Faturas</TabItemText>
        </TabItem>
      </Tab>
    </Container>
  );
};

export default Tabs;
