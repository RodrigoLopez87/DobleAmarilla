import { Link } from "react-router-dom";

export const Item = ({id, title, description, price, imgUrl}) => {
  return (
    <>
      <Link to={`/producto/${id}`}>
        <div className="card">
          <h2>{title}</h2>
          <h3>{description}</h3>
          <p>${price}</p>
        </div>
      </Link>
    </>
  );
}