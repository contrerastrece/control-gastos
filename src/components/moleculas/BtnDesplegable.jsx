import React from "react";
import styled from "styled-components";
import { v } from "../../index";

export const BtnDesplegable = ({ text, bgcolor, textcolor, funcion }) => {
  return (
    <Container $bgcolor={bgcolor} $textcolor={textcolor} onClick={funcion}>
      <span className="containerText">
        {<v.iconoFlechabajo />}
        <h6>{text} </h6>
      </span>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  background-color: ${(props) => props.$bgcolor};
  color: ${(props) => props.$textcolor};
  font-weight: 500;
  font-size: 1.5rem;
  padding: 0.9rem 2.3rem;
  border-radius: 3rem;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  .containerText {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    background-color: rgba(77, 77, 77, 0.5);
  }
`;
