import React from 'react'
import ConfigurationTemplate from '../components/templates/ConfigurationTemplate'
import styled from 'styled-components'

export const Configuration = () => {
  return (
    <Container>

      <ConfigurationTemplate/>
    </Container>

  )
}
const Container=styled.main`
  height:100vh;

`;