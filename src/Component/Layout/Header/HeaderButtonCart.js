import React from "react"
import cartBtn from './HeaderButtonCart.module.css'
import CartIcon from "../../Cart/CartIcon";

const HeaderButtonCart = () => {
  return (
    <button className={cartBtn.button}>
      <span className={cartBtn.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={cartBtn.badge}>0</span>
    </button>
  )
};

export default HeaderButtonCart;
