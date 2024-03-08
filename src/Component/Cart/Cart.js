import React, { useContext } from 'react'
import cartcss from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../Store/Cart-Context'
import CartItem from './CartItem'

const Cart = (props) => {
    const cartCtx = useContext(CartContext)

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`

    const cartItemRemoveHandler =(id)=>{
        console.log(id)
        cartCtx.removeItem(id)
    }
    
    const cartItemAddHandler=(item)=>{
        cartCtx.addItem(item)
    }

    const cartItems = (
        <ul className={cartcss['cart-item']}>
            {cartCtx.items.map((ele)=>       
                <CartItem 
                key={ele.id} 
                name={ele.name} 
                description={ele.description} 
                price={ele.price} 
                quantity={ele.quantity} 
                onRemove={cartItemRemoveHandler.bind(null, ele.id)}
                onAdd = {cartItemAddHandler.bind(null, ele)}
                />
            )}
        </ul>
        )
    
    // console.log('closehandler', props)
    return (
    <Modal onClick={props.onClose}>
            {cartItems}
        <div className={cartcss.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={cartcss.actions}>
            <button className={cartcss['button-alt']} onClick={props.onClose}>Close</button>
            <button className={cartcss.button}>Order</button>
        </div>
    </Modal>
  )
}

export default Cart
