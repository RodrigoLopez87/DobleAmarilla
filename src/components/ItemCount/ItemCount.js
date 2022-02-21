import { useState } from "react";

export const ItemCount = ({max, min = 0, counter, setCounter}) => {

  const handleSubstractClick = () => {
    counter > min && setCounter(counter - 1);
  }

  const handleAddClick = () => {
    counter < max && setCounter(counter + 1);
  }  

  return (
    <>
      <div>
        <button onClick={handleSubstractClick}>-</button>
        <span>{counter}</span>
        <button onClick={handleAddClick}>+</button>
      </div>
    </>
  );

}

//si el boton de restar esta en el minimo, grisarlo poniendo un className={ counter === min ? "clase que grisa" : "clase normal" }