import { db } from "../firebase/config";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";

export const GetProductList = (category) => {

  const productsRef = collection(db, 'productos');
  const q = category ? query(productsRef, where("category", "==", category)) : productsRef;
  return getDocs(q);
}

export const GetProductDetail = (productId) => {
  const productRef = doc(db, 'productos', productId);
  return getDoc(productRef);
}

