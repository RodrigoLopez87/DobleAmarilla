import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const Cart = () => {
  
  const { cart, removeItem, emptyCart, totalAmount } = useContext(CartContext);
  
  return (
      <>
        {
          cart.length === 0 ?
            <>
              <div className="cartTitle">
                <h2>El carrito está vacio</h2>
              </div>
            </>
            :
            <>
              <div className="cartTitle">
                <h2>Resumen de la compra:</h2>
              </div>

              <div className="cartList">
                <div className="cartList-itemsContainer"> 
                  {
                    cart.map((prod) => (
                      <div key={prod.id} className="cartList-itemCard"> 
                        <div className="cartList-itemCardFirstHalf">
                          <h4>{prod.title} - {prod.description}</h4>
                          <p>Cantidad: {prod.counter}</p>
                        </div>
                        <div className="cartList-itemCardSecondHalf">
                          <p>Total: $ {prod.price * prod.counter}</p>
                          <h4 onClick={()=>{removeItem(prod.id)}} className="deleteItemButton">X</h4>
                        </div>
                      </div>
                    ))
                  }
                </div>

                <h2 className="totalAmount">Total: ${totalAmount()}</h2>

                <h3 className="emptyCartButton" onClick={emptyCart}>Vaciar Carrito</h3>
              </div>
            </>

        }
      </>
  );
}