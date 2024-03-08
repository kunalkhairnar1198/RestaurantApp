import React, { useContext, useRef, useState } from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'
import CartContext from '../../Store/Cart-Context'

const MealItemForm = (props) => {
    const cartCtx = useContext(CartContext)
    const [amountIsValid, SetAmountIsValid] = useState(true)
    const amountInputRef = useRef()
    //  console.log('reinitialized',cartCtx)
    
    const addItemToCart =(event)=>{
       event.preventDefault()
       const enteredAmount = amountInputRef.current.value.trim();
       const enteredAmountNumber = +enteredAmount;
       console.log(enteredAmountNumber)

       if(enteredAmount.length === 0 ||
          enteredAmountNumber < 1 ||
          enteredAmountNumber > 5)
          {
            SetAmountIsValid(false)
            return
          }
          cartCtx.addItem({...props.item, quantity: enteredAmountNumber});

        // Reset the input and validation state after successful addition
        amountInputRef.current.value = '1';
        SetAmountIsValid(true);
    // console.log('after add product',cartCtx)
    }

    return (
        <form className={classes.form} onSubmit={addItemToCart}>
          {console.log('inside render',cartCtx.items)}
              <Input 
              ref={amountInputRef}
              label='Amount'
              input={{
                id:'amount',
                type: 'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'
              }} 
              />
            <button > + Add </button>
              {!amountIsValid && <p>Please Enter Valid amount(1-5)</p>}
        </form>

  )
}

export default MealItemForm
