import React, { useState } from 'react'
import '../styles/button.css'

const Button = ({handleAddToCart, test}) => {
  const [itemAdded, setItemAdded] = useState(0)

    handleAddToCart = (event) => {
      event.preventDefault();
      setItemAdded(itemAdded + 1)
      console.log("test " + test)
  }
  return (
    <button className='button' onClick={handleAddToCart}>Add to cart {itemAdded > 0 && `(${itemAdded})`}</button>
  )
}

export default Button