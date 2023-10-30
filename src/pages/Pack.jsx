
import React from "react";
import Title2 from "../components/Title2";
import { ModalContainer } from "./style/Pack.elements";
import  ProductContainer from "../components/ProductContainer";

const Pack = () => {
  return (
    <ModalContainer>
      <Title2>Pricing Card</Title2>
      <ProductContainer style={{ display: 'flex' }}/>
    </ModalContainer>
  );
};

export default Pack;
