import { styled } from "styled-components";

export const ContBaner = styled.div`
  display: flex;
  justify-content: space-between;
  width: auto;
  height: 85vh;
  margin-top: 20px;
`;

// Modal
export const ContLeft = styled.div`
  width: 45%;
  height: 100%;
`;

export const ContRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-repeat: no-repeat;
  align-items: flex-start;
`;

export const BoxImg = styled.img`
  /* max-height: 550px; */
  height: 85vh;
`;

export const BoxSale = styled.div`
padding-left: 32px;
`;

export const TitleB = styled.h2`
  font-family: "Martian Mono", monospace;
  font-weight: 700;
  font-size: 35px;
  background: -webkit-linear-gradient(red, blue);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  padding-left: 50px;
  margin: 0;
  margin-bottom: 10px;
`;

export const Pricebtn = styled.span`
  font-size: 38px;
  color: #ff0000;
  font-weight: 600;
  font-family: " Courier";
`;


export const TitleI = styled.h2`
 font-size: 22px;
 color: black;
 font-weight: 600;
`;

export const BtnLink = styled.button`
width: 200px;
margin-top: 20px;
padding: 10px 10px;
border-radius: 6px;
color:  #FFF;
text-align: center;
font-family: " Courier";
font-size: 26px;
font-weight: 700;
text-decoration: none;
background: #FC5C7D;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #6A82FB, #FC5C7D);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #6A82FB, #FC5C7D); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
