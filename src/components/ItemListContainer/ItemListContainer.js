import { ItemList } from "../ItemList/ItemList";
import { GetData } from "../../Helpers/GetData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  
  const [loading, setLoading] = useState();
  const [productos, setProductos] = useState([]);
  
  const { categoryId } = useParams(); 

  useEffect(() => {
    setLoading(true);
    
    GetData(categoryId)
    .then((res) => {
      setProductos(res);
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
        loading ? <h2>Cargando los datos...</h2> : <ItemList productos={productos}/>
      }
    </>
  );
}