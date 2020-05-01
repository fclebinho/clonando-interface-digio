import React from 'react';

import {Container, Card, CardTitle} from './styles';

export const Cards: React.FC = () => {
  return (
    <Container>
      <Card>
        <CardTitle>bloquear cartão</CardTitle>
      </Card>
      <Card color="#FE5291">
        <CardTitle>pontos livelo</CardTitle>
      </Card>
      <Card>
        <CardTitle>cartão virtual</CardTitle>
      </Card>
      <Card>
        <CardTitle>indicar amigo</CardTitle>
      </Card>
    </Container>
  );
};

export default Cards;
