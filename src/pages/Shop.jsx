import React from "react";
import "../styles/shop.css";
import productData from "./data";
import Shopcart from "./Shopcart";
import '../styles/shop.css'

const Shop = () => {
  const  data  = productData;

  return (
    <div className="shop">
      <h1>Shop</h1>
      <div className="products-container">
        {data.map((product) => (
            <Shopcart data={product}  key={product.id}/>
        ))}
      </div>
    </div>
  );
};

export default Shop;
