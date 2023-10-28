import React from "react";
import LogoIcon from "../assets/icon/marca.png";
import {
  ContainerNav,
  Title,
  StyledLinkT,
  Navigation,
  StyledLink,
  Logo,
  BoxLi
} from "./styles/Navbar.elements";

const Navbar = () => {
  return (
    <ContainerNav>
      <Title>
        <Logo src={LogoIcon} alt="Insired Network CR" />
        <StyledLinkT to="/">Sky506</StyledLinkT>
      </Title>
      <Navigation>
        <BoxLi>
          <StyledLink to="/about">Nosotros</StyledLink>
        </BoxLi>
        <BoxLi>
          <StyledLink to="/packages">Paquetes</StyledLink>
        </BoxLi>
        <BoxLi>
          <StyledLink to="/contact">Contacto</StyledLink>
        </BoxLi>
      </Navigation>
    </ContainerNav>
  );
};

export default Navbar;
