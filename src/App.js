import { Fragment } from "react";
import Header from "./Component/UI/Header/Header";
import Meals from "./Component/Meals/Meals";

function App() {
  return (
    <Fragment>
      <h2>Maker Restrourant website</h2>
      <Header/>
      <main>
        <Meals/>
      </main>

    </Fragment>
  );
}

export default App;
