import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {
    paddingLeft: 10,
    paddingRight: 20,
  },
  showsHorizontalScrollIndicator: false,
})`
  flex-direction: row;
  background: #ededed;
  border-radius: 8px;
  padding: 10px 5px;
`;

export interface CardProps {
  color?: string;
}

export const Card = styled.View<CardProps>`
  border-top-color: ${(props) => (props.color ? props.color : '#51c2be')};
  border-top-width: 3px;
  background: #fff;
  justify-content: flex-end;
  margin: 6px;
  border-radius: 8px;
  height: 135px;
  width: 100px;
`;

export const CardTitle = styled.Text`
  font-size: 14px;
  color: #0c2044;
  padding: 20px;
`;
