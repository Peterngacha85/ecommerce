import React from 'react';
import '../styles/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Header = ({setShow}) => {
  const handleShow = (show) => {
    return (e) => {
      console.log("show", e);
      e.preventDefault();
      setShow(show);
    };
  };
  return (
    <div className='header'>
      <div className='logo'>
        <h5>LOGO</h5>
      </div>
      <div className='search-bar'>
      </div>
      <div className='shop-cart'>
        <h5 onClick={handleShow(true)}>SHOP</h5>
        <h5 onClick={handleShow(false)}><i className="bi bi-cart-fill"></i></h5>
      </div>
    </div>
  );
}

export default Header;
