import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import { useContext, useEffect, useState } from "react";

export const ItemDetail = ({id, title, description, price, stock}) => {
  
  const [ counter, setCounter] = useState(0);
  const { cart, addToCart } = useContext(CartContext);
  
  const handleAddItem = () => {
    addToCart([
      id,
      title,
      description,
      price,
      counter
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
          <ItemCount max={stock} counter={counter} setCounter={setCounter} ></ItemCount>
          <div>
            <button onClick={handleAddItem}>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </>
  );
}