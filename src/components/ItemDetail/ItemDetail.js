export const ItemDetail = ({product}) => {
  return (
    <>
      <div className="container">
        <div className="detailCard">
          <h2>{product.title}</h2>
          <h2>{product.description}</h2>
          <h2>${product.price}</h2>
        </div>
      </div>
    </>
  );
}