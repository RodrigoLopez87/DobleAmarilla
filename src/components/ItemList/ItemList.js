import { Item } from "../Items/Item";

export const ItemList = ({productos}) => {

  return (
    <div className="container">

      {
        productos.map((prod, id) => <Item key={prod.id} {...prod}/>)
      }
    </div>
  );
}