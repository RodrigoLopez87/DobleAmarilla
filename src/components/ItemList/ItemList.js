import { Item } from "../Items/Item";
import "./ItemList.css";

export const ItemList = ({productos}) => {

  return (
    <div className="container">

      {
        productos.map((prod, id) => <Item key={prod.id} {...prod}/>)
      }
    </div>
  );
}