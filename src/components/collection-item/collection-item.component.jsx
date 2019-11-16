import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.action';
import { CollectionItemContainer, CustomButtonStyled, StyledImage, FooterContainer, Name, Price} from './collection-item.styled';

const CollectionItem = ({item, addItem}) =>{
  const {imageUrl, name, price} = item
  return(
  <CollectionItemContainer>
    <StyledImage imageUrl={imageUrl} className='image'/>
    <FooterContainer>
     <Name>{name}</Name>
     <Price>{price}</Price>
    </FooterContainer>
    <CustomButtonStyled
      onClick={()=>addItem(item)}
      inverted>Add to card</CustomButtonStyled>
  </CollectionItemContainer>
)}
const mapDispatchToProps = dispatch =>({
  addItem: user=>dispatch(addItem(user))
})
export default connect(null, mapDispatchToProps)(CollectionItem);