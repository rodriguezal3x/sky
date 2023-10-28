import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  height: 60px;
  margin: 0;
  align-items: center;
  background-color: #38383a;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StyledLinkT = styled(Link)`
  font-size: 24px;
  font-family: "Acme", sans-serif;
  font-weight: 400;
  padding: 20px;
  color: #fff;
  text-decoration: none;
`;

export const Logo = styled.img`
  height: 40px;
`;

export const Navigation = styled.ul`
  display: flex;
  justify-content: left;
  list-style: none;
  color: #fff;
`;

export const BoxLi = styled.li`
  padding: 10px;
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  color: #ffffff;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  text-decoration: none;
  
`;