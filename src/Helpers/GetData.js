import { Products } from "../Mocks/Products";

export const GetProductList  = (category) => {
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

export const GetProductDetail = (productId) => {
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve(Products.filter(prod => prod.id === productId));
    }, 500)
  });
}