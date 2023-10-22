import React from "react";
import { 
  BoxImg,BoxSale,BtnLink,ContBaner,ContLeft,ContRight,Pricebtn,TitleB,TitleI,
} from "./styles/Banner.elements";
import Promo1 from "../assets/image/Promo.jpeg";
import Sat from "../assets/image/Stelite.png";

const Banner = () => {
  return (
    <ContBaner>
      <ContLeft>
        <BoxImg src={Promo1} alt="Oferta dos por" />
      </ContLeft>
      <ContRight style={{ backgroundImage: `url(${Sat})`, opacity: 0.7 }}>
        <BoxSale>
          <TitleB>Desde</TitleB>
          <Pricebtn> ₡ 15,539 <span>al mes</span></Pricebtn>
        </BoxSale>
        <TitleI>
          El mejor servicio de television HD<br /> pais al  mejor precio.
        </TitleI>
        <BtnLink as="a" href="https://wa.me/72048907">
          Contratar
        </BtnLink>
      </ContRight>
    </ContBaner>
  );
};

export default Banner;
