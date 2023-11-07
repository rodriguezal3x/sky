
import React from "react";
import Title2 from "../components/Title2";
import { ModalContainer, Title3 } from "./style/Pack.elements";
import  ProductContainer from "../components/ProductContainer";

const Pack = () => {
  return (
    <ModalContainer>
      <Title3 className="textitle">Nuetros Productos</Title3>
      <ProductContainer style={{ display: 'flex' }}/>
    </ModalContainer>
  );
};

export default Pack;
