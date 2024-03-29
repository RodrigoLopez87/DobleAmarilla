import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

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
              <Link to="/cart"><button>Finalizar compra</button></Link>
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