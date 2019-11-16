import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

import { selectCartItems, selectTotalPrice } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import {CheckoutPageContainer, CheckoutHeaderStyled, HeaderBlockStyled, StyledTotal, TestWarning } from './checkout.styled';

const Checkout = ({ cartItems, selectTotalPrice }) =>(
  <CheckoutPageContainer>
    <CheckoutHeaderStyled>
       <HeaderBlockStyled>
         <span>Product</span>
       </HeaderBlockStyled>
       <HeaderBlockStyled>
       <span>Discription</span>
       </HeaderBlockStyled>
       <HeaderBlockStyled>
       <span>Quantity</span>
       </HeaderBlockStyled>
       <HeaderBlockStyled>
       <span>Price</span>
       </HeaderBlockStyled>
       <HeaderBlockStyled>
       <span>Remove</span>
       </HeaderBlockStyled>
    </CheckoutHeaderStyled>
      {
        cartItems.map(cartItem =>(
          <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
        ))
      }
      <StyledTotal>
        <span>TOTAL: ${selectTotalPrice}</span>
      </StyledTotal>
      <TestWarning>
         *Please use the following test credit card for payments*
         <br />
         4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </TestWarning>
      <StripeCheckoutButton/>
  </CheckoutPageContainer>
)
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  selectTotalPrice: selectTotalPrice
})
export default connect(mapStateToProps)(Checkout);