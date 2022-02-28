import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";

export const CartWidget = () => {

  const {cartQuantity} = useContext(CartContext);

  return (
    <>
      <div className={cartQuantity() === 0 ? "cartContainerHidden" : ""}>
        <Link to="/cart">
          <ShoppingCartOutlinedIcon className="cart"></ShoppingCartOutlinedIcon>
          <span className="cart">{cartQuantity()}</span>
        </Link>
      </div>
    </>
  );
}