import React from 'react';
import { CartItemContainer, ItemDetails, TextStyled} from './cart-item.styles';

const CartItem = ({cartItem:{name, imageUrl, price, quantity}}) =>(
  <CartItemContainer>
      <img src={imageUrl} alt='shop_item'/>
    <ItemDetails>
      <TextStyled>{name}</TextStyled>
      <TextStyled>{quantity} x ${price}</TextStyled>
    </ItemDetails>
  </CartItemContainer>
)
export default CartItem;