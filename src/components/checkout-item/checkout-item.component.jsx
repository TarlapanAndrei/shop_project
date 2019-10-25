import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem}) => {
  const {name, quantity, price, imageUrl} = cartItem;
  return(
  <div className='checkout-item'>
   <div className='image-container'>
     <img src={imageUrl} alt='shop item'/>
   </div>
   <span className='name'>{name}</span>
   <span className='quantity'>{quantity}</span>
   <span className='price'>{price}</span>
   <div className='remove-button'>
   &#10008;
   </div>
  </div>
)}
export default CheckoutItem;