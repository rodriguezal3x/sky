import { styled } from "styled-components";

export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  width: 280px;
  /* height: 472px; */
  height: 400px;
  flex-shrink: 0;
`;

export const TitleP = styled.h3`
  color: #000;
  font-family: "Acme", sans-serif;
  font-size: 36px;
  font-weight: 400;
  padding-top: 29px;
`;

export const SubTP = styled.p`
color: #747474;
font-family: Inter;
font-size: 13px;
font-style: normal;
font-weight: 700;
line-height: normal;
padding: 0px;
margin: 0px;
`;

export const PriceCont= styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 20px;
padding-bottom: 20px;
`;
export const Iten= styled.span`
color: #000;
font-family: Inter;
font-size: 24px;
/* font-style: normal; */
font-weight: 700;
/* line-height: normal; */
align-self: flex-start;
padding: 0px;
margin: 0px;
`;
export const ValuePrice= styled.h4`
color: #000;
font-family: Inter;
font-size: 48px;
/* font-style: normal; */
font-weight: 700;
/* line-height: normal; */
align-self: center;
padding: 0px;
margin: 0;
`;

export const Iten2= styled.span`
color: #000;
font-family: Inter;
font-size: 18px;
font-weight: 700;
/* line-height: normal; */
align-self: flex-end;
padding: 0px;
/* height: 0px; */
padding-bottom: 10px;
`;

export const ListBox = styled.ul`
padding-top: 10px;
display: flex;
flex-direction: column;
text-align: left;
justify-content: center;
list-style: none;
padding-left: 30%;
`;