import React, { useState } from "react";
import {
  CalendarioLineal,
  CardTotal,
  Header,
  useOperation,
  v,
} from "../../index";
import styled from "styled-components";
import dayjs from "dayjs";

export const TransactionTemplate = () => {
  const [value, setValue] = useState(dayjs(Date.now()));
  const [formatDate, setFormatDate] = useState("");
  const [state, setState] = useState(false);
  const { type, setType, colorCategory } = useOperation();
  return (
    <Container>
      <header className="header">
        <Header
          stateConfig={{ state: state, setState: () => setState(!state) }}
        />
      </header>
      <section className="area1">
        <CardTotal
          title={type == "g" ? "Gastos Pendientes" : "Ingresos Pendientes"}
          color={colorCategory}
          icono={<v.flechaarribalarga/>}
        />
        <CardTotal
          title={type == "g" ? "Gastos Pagados" : "Ingresos Pagados"}
          color={colorCategory}
          icono={<v.flechaabajolarga/>}
        />
        <CardTotal title={"TOTAL"} color={colorCategory} icono={<v.balance/>} />
      </section>
      <section className="area2">
        <CalendarioLineal
          value={value}
          setValue={setValue}
          setFormatoFecha={setFormatDate}
        />
      </section>
      <section className="main"></section>
    </Container>
  );
};
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
    justify-content: center;
  }
  .main {
    grid-area: main;
    background-color: rgba(179, 46, 241, 0.14);
  }
`;
