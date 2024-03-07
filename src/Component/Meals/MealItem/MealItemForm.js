import React, { useContext } from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'
import CartContext from '../../Store/Cart-Context'

const MealItemForm = (props) => {
    const cartCtx = useContext(CartContext)
       console.log('reinitialized',cartCtx)

    const addItemToCart =(e)=>{
       e.preventDefault()
    //update the cartcontext.item
    // cartCtx.items.push(props.item)
    const quantity = document.getElementById('amount_' + props.id).value;
    cartCtx.addItem({...props.item, quantity:quantity}) 
    console.log('after add product',cartCtx)
    }

  return (
        <form className={classes.form}>
          {console.log('inside render',cartCtx.items)}
              <Input 
              label='Amount'
              input={{
                id:'amount_' + props.id,
                type: 'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'
              }} 
              />
            <button onClick={addItemToCart}> + Add </button>
        </form>

  )
}

export default MealItemForm
