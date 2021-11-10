import React from 'react'
import { Header } from './components/Header'
import styled from '@emotion/styled';
import { Formulario } from './components/Formulario';

const Contendor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContendorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

export const CotizadorApp = () => {
  return (
    <Contendor>
      <Header 
        titulo='Cotizador de Seguros'
      />

      <ContendorFormulario>
        <Formulario />
      </ContendorFormulario>
    </Contendor>
  )
}
