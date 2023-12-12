import { useState } from "react";
import Shop from "./pages/Shop";
import "./App.css";
import Header from "./pages/Header";
import Cart from "./pages/Cart";

function App() {
  const [show, setShow] = useState(true);



  return (
    <>
      <Header setShow={setShow} />
      {show ? (
        <div className="shop-container">
          <Shop />
        </div>
      ) : (
        <div className="cart-container">
          <Cart  />
        </div>
      )}
    </>
  );
  
}

export default App;
