import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import { useContext, useEffect, useState } from "react";

export const ItemDetail = ({id, title, description, price, stock}) => {
  
  const { cart, addToCart } = useContext(CartContext);
  
  const addItem = (quantity) => {
    addToCart([
      id,
      title,
      description,
      price,
      quantity
    ]);
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <>
      <div className="container">
        <div className="detailCard">
          <h2>{title}</h2>
          <h2>{description}</h2>
          <h2>${price}</h2>
          <ItemCount max={stock} addItem={addItem} ></ItemCount>
        </div>
      </div>
    </>
  );
}