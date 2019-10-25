import React from 'react';
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { withRouter } from 'react-router-dom';
import { toggleHidden } from '../../redux/cart/cart.action';

const CartDropdown = ({cartItems, history, dispatch}) =>(
  <div className='cart-dropdown'>
    <div className='cart-items'> 
     {
       cartItems.length 
       ?
       (cartItems.map(cartItem => (
         <CartItem key={cartItem.id} cartItem={cartItem}/>
       )))
       :
       <span className='empty-message'>Your cart is empty</span>
       }

      </div>
    <CustomButton 
      onClick={ ()=>{
        history.push('/check');
        dispatch(toggleHidden());
      }
    }
               
      
    >GO TO CHECKOUT</CustomButton>
  </div>
)
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));