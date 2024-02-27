import React from "react"
import cartBtn from './HeaderButtonCart.css'
const HeaderButtonCart = (props) => {
  return (
    <button className={cartBtn.btn}>
        Your Cart
    </button>
  )
};

export default HeaderButtonCart;
