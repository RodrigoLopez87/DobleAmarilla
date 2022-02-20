import { CartContext } from "./CartContext";
import { useState } from "react";

export const CartProvider = ({children}) => {
  
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  }

  return (
    <CartContext.Provider value={{
        cart,
        addToCart
    }}>
      {children}
    </CartContext.Provider>
  );
}