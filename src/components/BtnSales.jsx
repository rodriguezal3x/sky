import React from 'react'
import { Btn1, ContBtn } from './styles/BtnSales.elements'

const BtnSales = ({ to, children }) => {
  return (
    <ContBtn to={to}>
      <Btn1>{children}</Btn1>
    </ContBtn>
  )
}

export default BtnSales
