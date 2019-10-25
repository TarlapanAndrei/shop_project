import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

import './checkout.styles.scss';
import { selectCartItems, selectTotalPrice } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = ({ cartItems, selectTotalPrice }) =>(
  <div className='checkout-page'>
    <div className='checkout-header'>
       <div className='header-block'>
         <span>Product</span>
       </div>
       <div className='header-block'>
       <span>Discription</span>
       </div>
       <div className='header-block'>
       <span>Quantity</span>
       </div>
       <div className='header-block'>
       <span>Price</span>
       </div>
       <div className='header-block'>
       <span>Remove</span>
       </div>
    </div>
      {
        cartItems.map(cartItem =>(
          <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
        ))
      }
      <div className='total'>
        <span>TOTAL: ${selectTotalPrice}</span>
      </div>
  </div>
)
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  selectTotalPrice: selectTotalPrice
})
export default connect(mapStateToProps)(Checkout);