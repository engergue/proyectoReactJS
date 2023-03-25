import React from "react";
import { useParams } from "react-router-dom";
import { CartButtons } from "../components/CartButtonsComponent";
import { ProductsInfo } from '../json';
import "./ProductDetails.css";

export const ProductDetails = () => {
  const { productSlug, productCat } = useParams();
  const producto = ProductsInfo.find((p) => p.slug === productSlug);
  const categoria = ProductsInfo.find((p) => p.categoria === productCat);

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="detalle-producto">
      <div className="product-left">
        <img src={producto.imagen} alt={producto.nombre} className="img-fluid" />
      </div>
      <div className="product-right">
        <h2>{producto.nombre}</h2>
        <p className="precio">$ {producto.precio} USD</p>
        <p className="card-text">{producto.descripcion}</p>
        <div className="botones-detalle">
          <CartButtons />
          <button className="btn btn-primary">Agregar al carrito</button>
        </div>
      </div>
      
    </div>
  );
};