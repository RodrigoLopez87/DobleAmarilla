import { Products } from "../Mocks/Products";
import { db } from "../firebase/config";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";

export const GetProductList2  = (category) => {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {

      if (category)
      {
        resolve(Products.filter(prod => prod.category === category));
      }
      else
      {
        resolve(Products);
      }
    }, 500);
  });
}

export const GetProductDetail2 = (productId) => {
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve(Products.filter(prod => prod.id === productId));
    }, 500)
  });
}

export const GetProductList = (category) => {

  const productsRef = collection(db, 'productos');
  const q = category ? query(productsRef, where("category", "==", category)) : productsRef;
  return getDocs(q);
}

export const GetProductDetail = (productId) => {
  const productRef = doc(db, 'productos', productId);
  return getDoc(productRef);
}

