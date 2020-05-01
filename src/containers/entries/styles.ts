import styled from 'styled-components/native';

export interface EntryProps {
  type: 'credit' | 'debit';
}

const defineColor = (props: EntryProps): string =>
  props.type === 'credit' ? '#51C2BE' : '#5A5A5A';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    marginTop: 25,
    marginLeft: 40,
    marginRight: 40,
  },
  showsHorizontalScrollIndicator: false,
})``;

export const Entry = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const EntryDetail = styled.View``;

export const EntryDescription = styled.Text<EntryProps>`
  font-size: 16px;
  color: ${(props) => defineColor(props)};
  margin-bottom: 8px;
`;

export const EntryDate = styled.Text<EntryProps>`
  font-size: 14px;
  color: ${(props) => defineColor(props)};
`;

export const EntryAmount = styled.Text<EntryProps>`
  font-size: 16px;
  color: ${(props) => defineColor(props)};
`;
