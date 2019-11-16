import React from 'react';
import { connect } from 'react-redux';
import { removeItem, minusAnItem, addItem } from '../../redux/cart/cart.action';
import { CheckoutItemContainer, ImageContainer, StyledText, StyledQuantity, RemoveButtonStyled } from './checkout-item.styled';

const CheckoutItem = ({cartItem, removeItem, minusAnItem, addItem}) => {
  const {name, quantity, price, imageUrl} = cartItem;
  return(
  <CheckoutItemContainer>
   <ImageContainer>
     <img src={imageUrl} alt='shop item'/>
   </ImageContainer>
   <StyledText>{name}</StyledText>
   <StyledQuantity>
     <div
       onClick={()=>minusAnItem(cartItem)}
       >&#10094;</div>
       <span>{quantity}</span>
     <div 
       onClick={()=>addItem(cartItem)}
      >&#10095;</div>
     </StyledQuantity>
   <StyledText>$ {price}</StyledText>
   <RemoveButtonStyled
        onClick={()=>removeItem(cartItem)}
   >
   &#10008;
   </RemoveButtonStyled>
  </CheckoutItemContainer>
)}
const mapDispatchToProps = dispatch =>({
  removeItem: user => dispatch(removeItem(user)),
  minusAnItem: user => dispatch(minusAnItem(user)),
  addItem: user =>dispatch(addItem(user))
})
export default connect(null, mapDispatchToProps)(CheckoutItem);