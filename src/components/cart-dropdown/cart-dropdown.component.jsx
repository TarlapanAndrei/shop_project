import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { withRouter } from 'react-router-dom';
import { toggleHidden } from '../../redux/cart/cart.action';
import { CartDropdownContainer, EmptyMessageStyled, CartItemsStyled} from './cart-dropdown.styled';

const CartDropdown = ({cartItems, history, dispatch}) =>(
  <CartDropdownContainer>
    <CartItemsStyled> 
     {
       cartItems.length 
       ?
       (cartItems.map(cartItem => (
         <CartItem key={cartItem.id} cartItem={cartItem}/>
       )))
       :
       <EmptyMessageStyled>Your cart is empty</EmptyMessageStyled>
       }

      </CartItemsStyled>
    <CustomButton 
      onClick={ ()=>{
        history.push('/check');
        dispatch(toggleHidden());
      }
    }
               
      
    >GO TO CHECKOUT</CustomButton>
  </CartDropdownContainer>
)
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));