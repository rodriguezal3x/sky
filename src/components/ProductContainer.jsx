import React from "react";
import ProductCard from "./ProductCard";
import ProductosData from "../data/productos.json"; // Importar los datos del archivo JSON
import { ContainerC } from "./styles/ProductContainer.elements";

const ProductContainer = () => {
  return (
    <ContainerC style={{ gap: 50}}>
      {ProductosData.slice(0, 3).map((producto, index) => (
        <ProductCard key={index} producto={producto} />
      ))}
    </ContainerC>
  );
};

export default ProductContainer;
