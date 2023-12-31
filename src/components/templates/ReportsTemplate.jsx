import React, { useState } from 'react'
import { CalendarioLineal, Header, Tabs } from '../../index';
import styled from 'styled-components';
import dayjs from 'dayjs';

export const ReportsTemplate = () => {  
    const [state, setState] = useState(false);
    const [value, setValue] = useState(dayjs(Date.now()));
    const [formatDate, setFormatDate] = useState('');
    return (
      <Container>
        <header className="header">
          <Header
            stateConfig={{ state: state, setState: () => setState(!state) }}
          />
        </header>
        <section className="area1"></section>
        <section className="area2">
          <CalendarioLineal setFormatoFecha={setFormatDate} setValue={setValue} value={value} />
        </section>
        <section className="main">
          <Tabs/>
        </section>
      </Container>
    );
  
}
const Container = styled.div`
  min-height: 100vh;
  padding: 15px;
  width: 100%;
  background: ${({ theme }) => theme.bgtotal};
  color: ${({ theme }) => theme.text};
  display: grid;
  grid-template:
    "header" 100px
    "area1" 100px
    "area2" 100px
    "main" auto;

  .header {
    grid-area: header;
    background-color: rgba(103, 93, 241, 0.14);
    display: flex;
    align-items: center;
  }
  .area1 {
    grid-area: area1;
    background-color: rgba(229, 67, 26, 0.14);
    display: flex;
    align-items: center;
  }
  .area2 {
    grid-area: area2;
    background-color: rgba(77, 237, 106, 0.14);
    display: flex;
    align-items: center;
    justify-content:center;
  }
  .main {
    grid-area: main;
    background-color: rgba(179, 46, 241, 0.14);
  }
`;
