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

  const removeItem = (id) => {
    const updatedCart = cart.filter(prod => prod.id !== id);
    setCart(updatedCart);
  }

  const totalAmount = () => {
    return cart.reduce((acc, prod) => acc + prod.counter*prod.price, 0);
  }

  const emptyCart = () => {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{
        cart,
        addToCart,
        cartQuantity,
        isInCart,
        removeItem,
        emptyCart,
        totalAmount
    }}>
      {children}
    </CartContext.Provider>
  );
}