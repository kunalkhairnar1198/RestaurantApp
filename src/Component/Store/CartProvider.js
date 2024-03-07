import { useState } from "react";
import CartContext from "./Cart-Context";

const CartProvider = (props) => {
    // let items =[];
    const [items, updateItems] = useState([])
    
    const addItemToCartHandler = (item) => {
      updateItems([ ...items, item])
      console.log('inside provider',item,cartContext.items)
    };
  
    const removeItemFromCartHandler = (id) => {};
  
    const cartContext = {
      items: items,
      totalAmount :0,
      addItem: addItemToCartHandler,
      removeItem: removeItemFromCartHandler,
      message:'i am accesible'
    };
  
    return (
      <CartContext.Provider value={cartContext}>
        {console.log('inside cardContext provider',cartContext)}
        {props.children}
      </CartContext.Provider>
    );
  };
  
  export default CartProvider;