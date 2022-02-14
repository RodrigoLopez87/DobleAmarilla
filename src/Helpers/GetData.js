import { Products } from "../Mocks/Products";

export const GetData  = (category) => {
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
    }, 1000);
  })
}