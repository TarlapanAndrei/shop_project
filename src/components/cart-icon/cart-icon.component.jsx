import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { createStructuredSelector } from 'reselect';
import { selectItemCount } from '../../redux/cart/cart.selectors';
import { toggleHidden } from '../../redux/cart/cart.action';
import { connect } from 'react-redux';
import './cart-icon.styles.scss';

const CartIcon = ({toggleHidden, itemCount}) =>{
  return(
    <div 
      className='cart-icon'
      onClick={toggleHidden}
      >
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{itemCount}</span>
    </div>
)}
const mapDispatchToProps = dispatch =>({
  toggleHidden: ()=>dispatch(toggleHidden())
})
const mapStateToProps = createStructuredSelector({
  itemCount: selectItemCount
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);