import { ItemList } from "../ItemList/ItemList";
import { GetData } from "../../Helpers/GetData";
import { useEffect, useState } from "react";

export const ItemListContainer = () => {
  
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]); 

  useEffect(() => {
    GetData()
    .then((res) => {
        setProductos(res);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
      setLoading(false);
    })
  }, []);


  return (
    <>
      {
        loading ? <h2>Cargando los datos...</h2> : <ItemList productos={productos}/>
      }
    </>
  );
}