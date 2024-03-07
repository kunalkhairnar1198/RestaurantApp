import React, { useContext } from "react"
import cartBtn from './HeaderButtonCart.module.css'
import CartIcon from "../../Cart/CartIcon";
import CartContext from "../../Store/Cart-Context";

const HeaderButtonCart = (props) => {

  const cartCtx = useContext(CartContext)

  // const numberOfCartItem = cartCtx.items.reduce((curNumber,item)=>{
  //   return curNumber + parseInt(item.amount)
  // },0);

  let quantity = 0;
   cartCtx.items.forEach(item =>{
    quantity = quantity + Number(item.quantity)
  })

  return (
    <button className={cartBtn.button} onClick={props.onClick}>
      <span className={cartBtn.icon}>
        <CartIcon /> 
      </span>
      <span>Your Cart</span>
      <span>{cartCtx.message}</span>
      <span className={cartBtn.badge}>{quantity}</span>
    </button>
  )
};

export default HeaderButtonCart;
