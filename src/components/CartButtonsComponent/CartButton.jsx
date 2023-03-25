import React from "react";

export const CartButtons = () => {
  const [qtyState, setQtyState] = React.useState(1);

  const AddQty = () => {
    if (qtyState === 5) return;
    setQtyState(qtyState + 1);
  };
  const LessQty = () => {
    if (qtyState === 1) return;
    setQtyState(qtyState - 1);
  };
 
  
  return (
    <>
      <div className="contador">
        <button className="lessButton" onClick={LessQty}>-</button>
        <div>{qtyState}</div>
        <button className="addButton" onClick={AddQty}>+</button>
      </div>
    </>
  );
};
