import { CartContext } from "./CartContext";
import { useState } from "react";

export const CartProvider = ({children}) => {
  
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  }

  const cartQuantity = () => {
    return cart.reduce((acc, prod) => acc + prod.counter, 0);
  }

  const isInCart = (id) => {
    return cart.some(prod => prod.id === id);
  }

  return (
    <CartContext.Provider value={{
        cart,
        addToCart,
        cartQuantity,
        isInCart
    }}>
      {children}
    </CartContext.Provider>
  );
}