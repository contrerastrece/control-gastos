import React from 'react'
import styled from 'styled-components';

export const AccionesTablas = ({funcion, icono, color, fontSize}) => {
  return <Container onClick={funcion} color={color} fontSize={fontSize}>{icono}</Container>;
}
const Container = styled.span`
color:${(props)=>props.color};
font-size:${(props)=>props.fontSize};
cursor: pointer;

`;