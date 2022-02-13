import { Shoes } from "../Mocks/Shoes";

export const GetData  = () => {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve(Shoes);
    }, 2000);
  })
}