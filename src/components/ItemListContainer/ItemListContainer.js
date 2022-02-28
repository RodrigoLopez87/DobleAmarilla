import { ItemList } from "../ItemList/ItemList";
import { GetProductList } from "../../Helpers/GetData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  
  const [loading, setLoading] = useState();
  const [productos, setProductos] = useState([]);
  
  const { categoryId } = useParams(); 

  useEffect(() => {
    setLoading(true);
    
    GetProductList(categoryId)
    .then((res) => {
      setProductos(res.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      }));
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
      setLoading(false);
    })
  }, [categoryId]);
 

  return (
    <>
      {
        loading ? <div className="container"><h2>Cargando...</h2></div> : <ItemList productos={productos}/>
      }
    </>
  );
}