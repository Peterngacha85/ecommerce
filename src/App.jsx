import { useState } from "react";
import Shop from "./pages/Shop";
import "./App.css";
import Header from "./pages/Header";

function App() {
  return (
    <>
      <Header />
      <div className="test">
      <Shop />
      </div>
    </>
  );
}

export default App;
