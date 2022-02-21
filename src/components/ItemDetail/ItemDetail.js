import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import { useContext, useEffect, useState } from "react";

export const ItemDetail = ({id, title, description, price, stock}) => {
  
  const [ counter, setCounter] = useState(0);
  const { addToCart, isInCart } = useContext(CartContext);
  
  const handleAddItem = () => {

    if (counter === 0)
      return;

    const item = {
      id,
      title,
      description,
      price,
      counter
    }

    addToCart(item);
  }

  return (  
    
    <>
      <div className="container">
        <div className="detailCard">
          <h2>{title}</h2>
          <h2>{description}</h2>
          <h2>${price}</h2>
          
          {
            isInCart(id) ? 
              <button>Finalizar compra</button>
            :
            <>
              <ItemCount max={stock} counter={counter} setCounter={setCounter} ></ItemCount>
              <div>
                <button onClick={handleAddItem}>Agregar al carrito</button>
              </div>
            </>
          }


        </div>
      </div>
    </>
  );
}