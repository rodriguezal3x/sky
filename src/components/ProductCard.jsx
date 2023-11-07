import React from 'react';
import { Card, SubTP, TitleP, PriceCont, Iten, ValuePrice, Iten2, ListBox} from './styles/ProductCard.elemts';
import BtnSales from './BtnSales';

const ProductCard = ({ producto }) => {
  return (
    <Card className="producto">
      <TitleP>{producto.titulo}</TitleP>
      <SubTP>{producto.descripcion}</SubTP>
      <PriceCont>
        <Iten>₡</Iten>
        <ValuePrice>{producto.precio}</ValuePrice>
        <Iten2>/mes</Iten2>
      </PriceCont>
      <BtnSales to={`/producto/${producto.id}`}>Lo Quiero</BtnSales>
      <Iten style={{color: "#404DC0"}}>{producto.canales}</Iten>
      {/* <hr/> */}
      <ListBox>
        {producto.caracteristicas.map((caracteristica, index) => (
          <li key={index}>
            <span>✔️</span> {caracteristica}
          </li>
        ))}
      </ListBox>
    </Card>
  );
};

export default ProductCard;
