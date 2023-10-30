import React from 'react';
import { Card } from './styles/ProductCard.elemts';

const ProductCard = ({ producto }) => {
  return (
    <Card className="producto">
      <h2>{producto.titulo}</h2>
      <p>{producto.descripcion}</p>
      <p>Precio: {producto.precio}</p>
      <p>{producto.canales}</p>
      <button>Lo quiero</button>
      <h3>Características:</h3>
      <ul>
        {producto.caracteristicas.map((caracteristica, index) => (
          <li key={index}>
            <span>✔️</span> {caracteristica}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ProductCard;
