import React from 'react'
import styled from 'styled-components';
import { v } from '../../styles/variables';

export default function BtnCerrar({funcion}) {
  return (
    <Container onClick={funcion} >
      {<v.iconocerrar/>}
    </Container>
  )
}
const Container = styled.span`
border:1px solid red;
  cursor: pointer;
  font-size: 25px;
  transition: all 0.2s;
  &:hover {
    /* color: ${() => v.colorselector}; */
    transform: scale(1.1);
  }
`;