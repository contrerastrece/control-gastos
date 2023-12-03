import React from 'react'
import { CategoriesTemplate } from '../index'
import styled from 'styled-components'

export const Categories = () => {
  return (
    <Container>
      <CategoriesTemplate/>
    </Container>
  )
}

const Container=styled.div`
  height:100vh;
`;
