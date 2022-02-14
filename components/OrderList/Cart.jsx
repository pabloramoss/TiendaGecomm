import React from 'react';
import CartItem from './CartItem';
const Cart = ({cart, handleRemoveFromCart, handleAddToCart})=> {

  return(
    <>
    {cart.map(item => (
      <CartItem 
      key={item.title}
      item={item}
      handleAddToCart={handleAddToCart}
      handleRemoveFromCart={handleRemoveFromCart}
      />
      ))}
    </>
  )
}
export default Cart