import React from 'react'
import cartcss from './Cart.module.css'
import Modal from '../UI/Modal'

const Cart = (props) => {
    
    const cartItems = (
        <ul className={cartcss['cart-item']}>
            {[{id:'c1', name:'kunal', amount:'2.02', price:12.05}].map((item)=>(
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    )

    const closeCardHandler=()=>{
        props.onCardIsDisable()
    }
    return (
    <Modal>
            {cartItems}
        <div className={cartcss.total}>
            <span>Total Amount</span>
            <span>35.62</span>
        </div>
        <div className={cartcss.actions}>
            <button className={cartcss['button-alt']} onClick={closeCardHandler}>Close</button>
            <button className={cartcss.button}>Order</button>
        </div>
    </Modal>
  )
}

export default Cart
