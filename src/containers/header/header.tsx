import React from 'react';
import {Text} from 'react-native';

import {
  Container,
  Title,
  Card,
  CardDetail,
  CardFooter,
  CardDetailHeader,
  CardDetailHeaderText,
  CardDetailHeaderAmount,
  CardDetailHeaderSuggestionText,
  Invoice,
  InvoiceDetail,
  InvoiceDetailPeriod,
  InvoiceDetailStatus,
  InvoiceAmount,
} from './styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <Title>Meu digio</Title>
      <Card>
        <CardDetail>
          <CardDetailHeader>
            <CardDetailHeaderText>Limite disponível</CardDetailHeaderText>
            <CardDetailHeaderAmount>R$ 308,88</CardDetailHeaderAmount>

            <CardDetailHeaderSuggestionText>
              Seu melhor dia de compra é 1
            </CardDetailHeaderSuggestionText>
          </CardDetailHeader>
        </CardDetail>
        <CardFooter>
          <Invoice>
            <InvoiceDetail>
              <InvoiceDetailPeriod>Fatura de maio</InvoiceDetailPeriod>
              <InvoiceDetailStatus>Aberta</InvoiceDetailStatus>
            </InvoiceDetail>
            <InvoiceAmount>R$ 197,04</InvoiceAmount>
          </Invoice>
          <Invoice>
            <InvoiceDetail>
              <InvoiceDetailPeriod>Fatura de junho</InvoiceDetailPeriod>
              <InvoiceDetailStatus>Próxima</InvoiceDetailStatus>
            </InvoiceDetail>
            <InvoiceAmount>R$ 197,04</InvoiceAmount>
          </Invoice>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default Header;
