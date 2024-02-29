import { Fragment } from "react";
import Header from "./Component/Layout/Header/Header";
import Meals from "./Component/Meals/Meals";
import Cart from "./Component/Cart/Cart";


function App() {
  return (
    <Fragment>
      
      <Header/>
      <Cart/>
          <main>
            <Meals/>
          </main>
    </Fragment>
  );
}

export default App;
