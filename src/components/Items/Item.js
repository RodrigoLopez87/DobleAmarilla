import "./item.css";

export const Item = ({productName, price}) => {
  return (
    <>
      <div className="card">
        <h2>{productName}</h2>
        <p>${price}</p>
      </div>
    </>
  );
}