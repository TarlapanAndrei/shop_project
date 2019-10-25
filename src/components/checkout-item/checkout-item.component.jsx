import React from 'react';
import { connect } from 'react-redux';
import { removeItem, minusAnItem, addItem } from '../../redux/cart/cart.action';

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem, removeItem, minusAnItem, addItem}) => {
  const {name, quantity, price, imageUrl} = cartItem;
  return(
  <div className='checkout-item'>
   <div className='image-container'>
     <img src={imageUrl} alt='shop item'/>
   </div>
   <span className='name'>{name}</span>
   <span className='quantity'>
     <div className='arrow'
       onClick={()=>minusAnItem(cartItem)}
       >&#10094;</div>
       <span className='value'>{quantity}</span>
     <div 
       onClick={()=>addItem(cartItem)}
       className='arrow'>&#10095;</div>
     </span>
   <span className='price'>$ {price}</span>
   <div className='remove-button'
        onClick={()=>removeItem(cartItem)}
   >
   &#10008;
   </div>
  </div>
)}
const mapDispatchToProps = dispatch =>({
  removeItem: user => dispatch(removeItem(user)),
  minusAnItem: user => dispatch(minusAnItem(user)),
  addItem: user =>dispatch(addItem(user))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);