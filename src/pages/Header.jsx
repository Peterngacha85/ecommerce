import React from 'react'
import '../styles/header.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>
            <h5>LOGO</h5>
        </div>
    <div className='shop-cart'>
    <h5>SHOP</h5>
      <h5>CART</h5>
    </div>
    </div>
  )
}

export default Header