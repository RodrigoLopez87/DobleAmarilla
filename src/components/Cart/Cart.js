import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const Cart = () => {
  
  const { cart } = useContext(CartContext);
  
  return (
      <div className="container">
        <h2>Resumen:</h2>

        {
          cart.map((prod) => (
            <div key={prod.id}> 
              <h4>{prod.title}</h4>
              <p>{prod.description}</p>
              <p>${prod.price}</p>
              <p>{prod.counter}</p>
            </div>
          ))
        }

      </div>
  );
}