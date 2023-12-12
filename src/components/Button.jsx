import React from 'react'
import '../styles/button.css'

const Button = ({handleAddToCart, test}) => {
   handleAddToCart = () => {
    alert(`${test} Added to cart`)
    console.log(`${test} Added to cart`)
  }
  return (
    <button className='button' onClick={handleAddToCart}>Add to cart</button>
  )
}

export default Button