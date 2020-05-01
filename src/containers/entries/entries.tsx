import React from 'react';

import {
  Container,
  Entry,
  EntryDetail,
  EntryDescription,
  EntryDate,
  EntryAmount,
} from './styles';

export const Entries: React.FC = () => {
  return (
    <Container>
      <Entry>
        <EntryDetail>
          <EntryDescription type="credit">Pagamento recebido</EntryDescription>
          <EntryDate type="credit">06/04</EntryDate>
        </EntryDetail>
        <EntryAmount type="credit">R$ 245,70</EntryAmount>
      </Entry>

      <Entry>
        <EntryDetail>
          <EntryDescription type="debit">Pag*Hotdogdosguri</EntryDescription>
          <EntryDate type="debit">24/01</EntryDate>
        </EntryDetail>
        <EntryAmount type="debit">R$ 26,00</EntryAmount>
      </Entry>

      <Entry>
        <EntryDetail>
          <EntryDescription type="debit">Ebanx Spotify</EntryDescription>
          <EntryDate type="debit">23/01</EntryDate>
        </EntryDetail>
        <EntryAmount type="debit">R$ 16,90</EntryAmount>
      </Entry>

      <Entry>
        <EntryDetail>
          <EntryDescription type="debit">Pag*Siolipark</EntryDescription>
          <EntryDate type="debit">23/01</EntryDate>
        </EntryDetail>
        <EntryAmount type="debit">R$ 5,00</EntryAmount>
      </Entry>

      <Entry>
        <EntryDetail>
          <EntryDescription type="debit">Superrosa Ltda</EntryDescription>
          <EntryDate type="debit">22/01</EntryDate>
        </EntryDetail>
        <EntryAmount type="debit">R$ 28,84</EntryAmount>
      </Entry>
    </Container>
  );
};

export default Entries;
