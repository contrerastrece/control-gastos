import React, { useState } from "react";
import {
  BtnDesplegable,
  BtnFilter,
  ContentFilters,
  DataDesplegableTipo,
  Header,
  ListaMenuDesplegable,
  RegistrarCategorias,
  TablaCategorias,
  useOperation,
  v,
} from "../../index";
import styled from "styled-components";

export const CategoriesTemplate = ({ data }) => {
  const [state, setState] = useState(false);
  const [stateType, setStateType] = useState(false);
  const [dataSelect, setdataSelect] = useState([]);
  const [openRegistro, SetopenRegistro] = useState(false);
  const [accion, setAccion] = useState("");

  const { titleBtnDesplegable, colorCategory, bgCategory, setType } =
    useOperation();

  const changeType = (p) => {
    setType(p);
    setStateType(!stateType);
    setState(false);
  };

  const cerrarDesplegables = () => {
    setStateType(false);
    setState(false);
  };
  const openTipo = () => {
    setStateType(!stateType);
    setState(false);
  };
  const openUser = () => {
    setState(!state);
    setStateType(false);
  };

  const nuevoRegistro = () => {
    SetopenRegistro(!openRegistro);
    setAccion("Nuevo");
    setdataSelect("");
  };
  return (
    <Container>
      {openRegistro && (
        <RegistrarCategorias
          onClose={() => SetopenRegistro(!openRegistro)}
          accion={accion}
          dataSelect={dataSelect}
        />
      )}
      <header className="header">
        <Header stateConfig={{ state: state, setState: openUser }} />
      </header>

      <section className="area1">
        <ContentFilters>
          <BtnDesplegable
            bgcolor={bgCategory}
            text={titleBtnDesplegable}
            textcolor={colorCategory}
            funcion={openTipo}
          />
          {stateType && (
            <ListaMenuDesplegable
              data={DataDesplegableTipo}
              top="115%"
              funcion={(p) => changeType(p)}
            />
          )}
        </ContentFilters>
      </section>

      <section className="area2">
        <ContentFilter>
          <BtnFilter
            bgcolor={bgCategory}
            textcolor={colorCategory}
            icono={<v.agregar />}
            funcion={nuevoRegistro}
          />
        </ContentFilter>
      </section>
      {/* Tabla */}
      <section className="main">
        <TablaCategorias
          data={data}
          SetopenRegistro={SetopenRegistro}
          setdataSelect={setdataSelect}
          setAccion={setAccion}
        />
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
    "area1" 100px
    "area2" 50px
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
    justify-content: end;
  }
  .main {
    grid-area: main;
    background-color: rgba(179, 46, 241, 0.14);
  }
`;
const ContentFilter = styled.div``;
