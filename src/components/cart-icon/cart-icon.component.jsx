import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleHidden } from '../../redux/cart/cart.action';
import { connect } from 'react-redux';
import './cart-icon.styles.scss';

const CartIcon = ({toggleHidden, cartItemsSum}) =>{
  return(
    <div 
      className='cart-icon'
      onClick={toggleHidden}
      >
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{cartItemsSum}</span>
    </div>
)}
const mapDispatchToProps = dispatch =>({
  toggleHidden: ()=>dispatch(toggleHidden())
})
const mapStateToProps = ({cart:{cartItems}}) =>({
  cartItemsSum: cartItems.reduce((total, element)=>total+element.quantity,0)
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);