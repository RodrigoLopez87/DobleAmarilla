import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({id, title, description, price, stock}) => {
  
  
  return (
    <>
      <div className="container">
        <div className="detailCard">
          <h2>{title}</h2>
          <h2>{description}</h2>
          <h2>${price}</h2>
          <ItemCount max={stock}></ItemCount>
        </div>
      </div>
    </>
  );
}