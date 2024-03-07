import React from 'react';
//initialize store and create structure of the structure
// this cartContext is a global store
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
});

export default CartContext;