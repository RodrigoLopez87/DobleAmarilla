import "./item.css";

export const Item = ({id, title, description, price, imgUrl}) => {
  return (
    <>
      <div className="card">
        <h2>{title}</h2>
        <h3>{description}</h3>
        <p>${price}</p>
      </div>
    </>
  );
}