import React from 'react'
import styled from 'styled-components';
import { AccionesTablas } from "../../../index";
import { v } from "../../../styles/variables";


export const ContentAccionesTabla = ({funcionEditar,funcionEliminar}) => {
  return (
    <Container>
      <AccionesTablas funcion ={funcionEditar} fontSize="18px" color="#7d7d7d" icono={<v.iconeditarTabla/>} />
      <AccionesTablas funcion={funcionEliminar} fontSize="20px" color="#f76e8e" icono={<v.iconeliminarTabla/>} />
      
    </Container>
  );
}
const Container = styled.div`
 display: flex;
  flex-wrap: wrap;
  justify-content:center;
  gap:10px;
  @media (max-width: 48em) {
    justify-content:end;
  }
`;