import React, { useState } from "react";
import {
  BtnDesplegable,
  CalendarioLineal,
  CardTotal,
  ContentFilters,
  Header,
  ListaMenuDesplegable,
  TablaTransactions,
  useAccountStore,
  useCategoriesStore,
  useOperation,
  useTranstactionsStore,
  useUsuariosStore,
  DataDesplegableMovimientos,
  v,
  BtnFilter,
  RegistrarMovimientos,
  BtnSave,
} from "../../index";
import styled from "styled-components";
import dayjs from "dayjs";
import { useQuery } from "@tanstack/react-query";
import { Device } from "../../styles/breakpoints";

export const TransactionTemplate = () => {
  const [value, setValue] = useState(dayjs(Date.now()));
  const [formatDate, setFormatDate] = useState("");
  const [stateType, setStateType] = useState(false);
  const [openRegistro, SetopenRegistro] = useState(false);
  const [accion, setAccion] = useState("");
  const [dataSelect, setdataSelect] = useState([]);
  const [state, setState] = useState(false);

  const {
    type,
    bgCategory,
    titleBtnDesplegableMov,
    setType,
    colorCategory,
    year,
    month,
  } = useOperation();
  const { id_user } = useUsuariosStore();
  const {showAccount } = useAccountStore();
  const { showCategories } = useCategoriesStore();
  const {
    dataTransactions,
    totalMonthYear,
    totalMonthYearPayed,
    totalMonthYearPending,
    showTransactions,
  } = useTranstactionsStore();

  const openTipo = () => {
    setStateType(!stateType);
    setState(false);
  };
  const changeType = (p) => {
    setType(p);
    setStateType(!stateType);
    setState(false);
  };

  const nuevoRegistro = () => {
    SetopenRegistro(!openRegistro);
    setAccion("Nuevo");
    setdataSelect("");
  };
  // year_param: p.year,
  // month_param: p.month,
  // id_user_param: p.id_user,
  // type_category_param: p.type_category,
  useQuery({
    queryKey: [
      "show transactions month-year",
      {
        year: year,
        month: month,
        id_user: id_user,
        type_category: type,
      },
    ],
    queryFn: () =>
      showTransactions({
        year: year,
        month: month,
        id_user: id_user,
        type_category: type,
      }),
  });
  useQuery({
    queryKey: ["mostrar cuentas", { id_user: id_user }],
    queryFn: () => showAccount({ id_user: id_user }),
  });
  useQuery({
    queryKey: ["mostrar categorias", { id_user: id_user, type: type }],
    queryFn: () => showCategories({ id_user: id_user, type: type }),
  });

  return (
    <Container>
      {openRegistro && (
        <RegistrarMovimientos
          setState={() => SetopenRegistro(!openRegistro)}
          state={openRegistro}
          dataSelect={dataSelect}
        />
      )}
      <header className="header">
        <Header
          stateConfig={{ state: state, setState: () => setState(!state) }}
        />
      </header>
      <section className="type_transaction">
        {/* Select TypeTransaction */}
        <ContentFilters>
          <BtnDesplegable
            bgcolor={bgCategory}
            text={titleBtnDesplegableMov}
            textcolor={colorCategory}
            funcion={openTipo}
          />
          {stateType && (
            <ListaMenuDesplegable
              data={DataDesplegableMovimientos}
              top="115%"
              funcion={(p) => changeType(p)}
            />
          )}
        </ContentFilters>

        {/* Btn Registrar Movimiento */}
        <ContentFilters>
          <BtnFilter
            bgcolor={bgCategory}
            textcolor={colorCategory}
            icono={<v.agregar />}
            funcion={nuevoRegistro}
          />         
        </ContentFilters>
      </section>
      {/* Cards */}
      <section className="cards">
        <CardTotal
          total={totalMonthYearPending}
          title={type == "g" ? "Gastos Pendientes" : "Ingresos Pendientes"}
          color={colorCategory}
          icono={<v.flechaarribalarga />}
        />
        <CardTotal
          total={totalMonthYearPayed}
          title={type == "g" ? "Gastos Pagados" : "Ingresos Pagados"}
          color={colorCategory}
          icono={<v.flechaabajolarga />}
        />
        <CardTotal
          total={totalMonthYear}
          title={"TOTAL"}
          color={colorCategory}
          icono={<v.balance />}
        />
      </section>
      {/* Calendario */}
      <section className="calendar">
        <CalendarioLineal
          value={value}
          setValue={setValue}
          setFormatoFecha={setFormatDate}
        />
      </section>
      {/* Tabla */}
      <section className="main">
        <TablaTransactions data={dataTransactions} />
      </section>
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
    "type_transaction" 100px
    "cards" 360px
    "calendar" 100px
    "main" auto;
    @media ${Device.tablet} {
      grid-template:
    "header" 100px
    "type_transaction" 100px
    "cards" 100px
    "calendar" 100px
    "main" auto;
    }

  .header {
    grid-area: header;
    /* background-color: rgba(103, 93, 241, 0.14); */
    display: flex;
    align-items: center;
  }
  .type_transaction {
    grid-area: type_transaction;
    /* background-color: rgba(107, 214, 14, 0.14); */
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .cards {
    grid-area: cards;
  //  background-color: rgba(229, 26, 165, 0.14);
    display: grid;
    align-items: center;
    grid-template-columns: 1fr;
    gap: 10px;

    @media ${Device.tablet} {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  .calendar {
    grid-area: calendar;
   // background-color: rgba(77, 237, 106, 0.14);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .main {
    grid-area: main;
   // background-color: rgba(179, 46, 241, 0.14);
  }
`;