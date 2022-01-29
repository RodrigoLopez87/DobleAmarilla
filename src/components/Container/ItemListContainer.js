import "./ItemListContainer.css";
import { Item } from "../Items/Item";

export const ItemListContainer = () => {
  
  return (
    <>
      <div className="container">
        <Item productName="Nike-Hypervenom Phatal II" price="7000"/>
        <Item productName="Nike-Phantom Venom" price="8000"/>
        <Item productName="Nike-Superfly Elite" price="12000"/>
        <Item productName="Nike-Vapor" price="10000"/>
      </div>
    </>
  );
}