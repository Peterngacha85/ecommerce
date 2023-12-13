import React, { useEffect } from "react";
import "../styles/shopcart.css";
import Button from "../components/Button";

const Shopcart = ({ data }) => {
  useEffect(() => {
    console.log("Shopcart component mounted or updated");
    return () => {
      console.log("Shopcart component will unmount");
    };
  }, []); // The empty dependency array ensures that this effect runs once on mount

  return (
    <div className="product">
      <div className="product-image">
        <img className="img" src={data.image} alt={data.name} />
      </div>
      <div className="product-details">
        <h3 className="name">{data.name}</h3>
        <h4 className="price">$ {data.price}</h4>
        <p>{data.description}</p>
      </div>
      <Button handleAddToCart test={data.name}/>
    </div>
  );
};

export default Shopcart;
