import { styled } from "styled-components";

export const LayoutFm = styled.div`
  display: flex;
  width: 100vw;
  height: 90vh;
  padding: 50px 105px;
  flex-direction: column;
  align-items: center;
  background: var(--default-white, #fff);
  /* background-color: red; */
`;

export const Heading = styled.header`
  display: flex;
  width: 49%;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background-color: #fff;
  padding-bottom: 50px;
  padding-top: 20px;
`;

export const ContainerFm = styled.section`
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columnas de igual ancho */
  grid-template-rows: repeat(2, 1fr); /* 2 filas de igual altura */
  gap: 10px;
`;

export const BoxInstance = styled.div`
  padding: 10px;
  text-align: center;
  /* border: 1px solid #000; */
`;
