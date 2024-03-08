import { useReducer } from "react";
import CartContext from "./Cart-Context";

const defaultState ={
    items:[],
    totalAmount:0,
} 
const cardReducer = (state, action)=>{

  if(action.type ==='ADD'){
      
      const updatedTotalAmount = state.totalAmount + action.item.price * action.item.quantity;
      
      const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);

      const existingCartItem =state.items[existingCartItemIndex];
        
        let updatedItems;

        if(existingCartItem){
          
          const  updatedItem = {
            ...existingCartItem,
            quantity: existingCartItem.quantity + action.item.quantity
            // amount: existingCartItem.amount + action.item.amount
          }
          console.log(updatedItem)
          updatedItems =[...state.items];
          updatedItems[existingCartItemIndex] = updatedItem;
        }else{
          updatedItems = state.items.concat(action.item)
        }

        
        
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
      }
  }
      //Remove condition when removeHandler is called
      if(action.type === 'REMOVE'){

        const existingCartItemIndex = state.items.findIndex(item => action.id === item.id)
        const existingItem = state.items[existingCartItemIndex]
        const updatedTotalAmount = state.totalAmount - existingItem.price;

        let updatedItems;
        if(existingItem.quantity === 1 ){
          updatedItems = state.items.filter(item => item.id !== action.id);
        }else{
            const updatedItem ={
              ...existingItem,
              quantity: existingItem.quantity - 1
            }
            updatedItems =[...state.items]
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount
        }
      }
  return defaultState
}
const CartProvider = (props) => {

  const [cardState, dispactchCardState] = useReducer(
      cardReducer,
      defaultState,
    )
    const addItemToCartHandler = (item) => {
      dispactchCardState({type:'ADD', item:item})
      // console.log('inside provider',item, cardState)
    };
  
    const removeItemFromCartHandler = (id) => {
      dispactchCardState({type:'REMOVE', id:id})
    };
  
    const cartContext = {
      items: cardState.items,
      totalAmount :cardState.totalAmount,
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