import React, { useContext } from "react"
import cartBtn from './HeaderButtonCart.module.css'
import CartIcon from "../../Cart/CartIcon";
import CartContext from "../../Store/Cart-Context";

const HeaderButtonCart = (props) => {

  const cartCtx = useContext(CartContext)

  const numberOfCartItem = cartCtx.items.reduce((curNumber,item)=>{
    return curNumber + item.amount
  },0);
  
  return (
    <button className={cartBtn.button} onClick={props.onClick}>
      <span className={cartBtn.icon}>
        <CartIcon /> 
      </span>
      <span>Your Cart</span>
      <span className={cartBtn.badge}>{numberOfCartItem}</span>
    </button>
  )
};

export default HeaderButtonCart;
