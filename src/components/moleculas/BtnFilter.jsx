import React from "react";
import styled from "styled-components";

export const BtnFilter = ({ bgcolor, textcolor, icono, funcion }) => {
  return (
    <Container $bgcolor={bgcolor} onClick={funcion} $textcolor={textcolor}>
      <span>{icono}</span>
    </Container>
  );
};
const Container = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${(props) => props.$bgcolor};
  color: ${(props) => props.$textcolor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  cursor: pointer;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.1s ease;
    &:hover {
      transform: scale(1.3);
    }
  }
`;
