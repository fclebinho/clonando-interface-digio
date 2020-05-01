import styled from 'styled-components/native';

export const Container = styled.View``;

export const Title = styled.Text`
  margin: 20px;
  font-size: 26px;
  font-weight: bold;
  color: #5a5a5a;
`;

export const Card = styled.View`
  height: 280px;
  margin: 20px;
`;

export const CardDetail = styled.View`
  background: #202f5a;
  padding: 23px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const CardDetailHeader = styled.View``;

export const CardDetailHeaderText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const CardDetailHeaderAmount = styled.Text`
  padding: 16px 0;
  font-size: 18px;
  color: #fff;
`;

export const CardDetailHeaderSuggestionText = styled.Text`
  padding: 16px 0;
  font-size: 16px;
  color: #505c7e;
`;

export const CardFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background: #0c2044;
  padding: 23px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const Invoice = styled.View``;

export const InvoiceDetail = styled.View`
  margin-bottom: 6px;
`;

export const InvoiceDetailPeriod = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
`;
export const InvoiceDetailStatus = styled.Text`
  font-size: 14px;
  color: #505c7e;
`;
export const InvoiceAmount = styled.Text`
  font-size: 16px;
  color: #fff;
`;
