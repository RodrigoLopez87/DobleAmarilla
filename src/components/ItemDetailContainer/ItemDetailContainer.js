import { ItemDetail } from "../ItemDetail/ItemDetail";
import { GetProductDetail } from "../../Helpers/GetData";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState();

  const { productId } = useParams(); 
  
  useEffect(() => {
    GetProductDetail(productId)
    .then((doc) => {
      setProduct({id: doc.id, ...doc.data()});
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
      setLoading(false);
    })
  });
  
  return (
    <>
      {
        loading ? <h2>Cargando...</h2> : <ItemDetail {...product}/>
      }
    </>
  );
}