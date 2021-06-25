import React from "react";

const CartContext = React.createContext({
  Items: [],
  TotalAmount: 0,
  AddItem: (item) => {},
  RemoveItem: (id) => {},
});

export default CartContext;
