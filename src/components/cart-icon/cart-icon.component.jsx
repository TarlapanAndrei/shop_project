import React from 'react';
import { createStructuredSelector } from 'reselect';
import { selectItemCount } from '../../redux/cart/cart.selectors';
import { toggleHidden } from '../../redux/cart/cart.action';
import { connect } from 'react-redux';
import { CartIconContainer, ShopingIcon, ItemCount} from './cart-icon.styled';

const CartIcon = ({toggleHidden, itemCount}) =>{
  return(
    <CartIconContainer
      onClick={toggleHidden}
      >
      <ShopingIcon/>
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
)}
const mapDispatchToProps = dispatch =>({
  toggleHidden: ()=>dispatch(toggleHidden())
})
const mapStateToProps = createStructuredSelector({
  itemCount: selectItemCount
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);