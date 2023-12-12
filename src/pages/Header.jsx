import React from 'react';
import '../styles/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <h5>LOGO</h5>
      </div>
      <div className='search-bar'>
        {/* <input type='text' placeholder='Search...' />
        <button>Search</button> */}
      </div>
      <div className='shop-cart'>
        <h5>SHOP</h5>
        <h5><i className="bi bi-cart-fill"></i></h5>
      </div>
    </div>
  );
}

export default Header;
