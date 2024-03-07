import { useState } from "react";
import Header from "./Component/Layout/Header/Header";
import Meals from "./Component/Meals/Meals";
import Cart from "./Component/Cart/Cart";
import CartProvider from "./Component/Store/CartProvider";


function App(props) {

  const [IsshowCart , setIsShowCart] = useState(false)

  const CartIsVisible =()=>{
    setIsShowCart(true)
  }

  const CartIsDisable =()=>{
    setIsShowCart(false)
  }
  

  return (
    <CartProvider>
      {IsshowCart && <Cart onClose={CartIsDisable} />}
      <Header onShowCart={CartIsVisible}/>
          <main>
            <Meals/>
          </main>
    </CartProvider>
  );
}

export default App;
