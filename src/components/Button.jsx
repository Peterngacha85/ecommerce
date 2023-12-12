import React, { useState } from 'react'
import '../styles/button.css'

const Button = ({handleAddToCart, test}) => {
  const [itemAdded, setItemAdded] = useState(0)

   handleAddToCart = () => {
    setItemAdded(itemAdded + 1)

  }
  return (
    <button className='button' onClick={handleAddToCart}>Add to cart {itemAdded > 0 && `(${itemAdded})`}</button>
  )
}

export default Button