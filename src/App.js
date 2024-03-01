import { Fragment, useState } from "react";
import Header from "./Component/Layout/Header/Header";
import Meals from "./Component/Meals/Meals";
import Cart from "./Component/Cart/Cart";


function App(props) {

  const [IsshowCart , setIsShowCart] = useState(false)

  const CartIsVisible =()=>{
    setIsShowCart(true)
  }

  const CartIsDisable =()=>{
    setIsShowCart(false)
  }
  

  return (
    <Fragment>
      {IsshowCart && <Cart onCardIsDisable={CartIsDisable} />}
      <Header onShowCart={CartIsVisible}/>
          <main>
            <Meals/>
          </main>
    </Fragment>
  );
}

export default App;
