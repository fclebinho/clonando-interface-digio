import styled from 'styled-components/native';

export const Container = styled.View``;

export const Tab = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 14px 0;
`;

export const TabItem = styled.TouchableOpacity``;

export interface TabItemTextProps {
  active?: boolean;
}

export const TabItemText = styled.Text<TabItemTextProps>`
  font-size: 18px;
  text-align: center;
  color: ${(props) => (props.active ? '#0C2044' : '#5A5A5A')};
`;
