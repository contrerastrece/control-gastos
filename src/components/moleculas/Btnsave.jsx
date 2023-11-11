import React from 'react'
import styled from 'styled-components';
import { Icono } from '../../index';

const BtnSave = ({funcion,titulo,bgColor,icono}) => {
  return (
    
    <Container type='submit' $bgColor={bgColor}>
      <Icono>{icono}</Icono>
      <span className='btn' onClick={funcion}>{titulo}</span>
    </Container>
  )
}
const Container=styled.button`
  display:flex;
  justify-content:center;
  align-items:center;
  text-decoration:none;
  border:none;
  gap:1em;
  background:initial;
  .btn{
    background-color:${(props)=>props.$bgColor};
    padding:0.6em 1.3em;
    font-weight:900;
    font-size:1.5em;
    border-radius:0.4em;
    border:3px solid black;
    box-shadow:0.1em 0.1em #000;
    white-space:1px;
    transition:0.2s;
    color:#000;
    cursor:pointer;
    &:hover{
      transform:translate(-0.05em,-0.05em);
      box-shadow:0.15em 0.15em #000;

    }
    &:active{
      transform:translate(0.05em.0.05em);
      box-shadow:0.05em 0.05em #000;
    }
  }

`;

export default BtnSave