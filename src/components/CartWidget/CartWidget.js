import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

export const CartWidget = () => {

  const {cartQuantity} = useContext(CartContext);

  return (
    <>
      <div>
        <ShoppingCartOutlinedIcon className="cart"></ShoppingCartOutlinedIcon>
        <span className="cart">{cartQuantity()}</span>
      </div>
    </>
  );
}