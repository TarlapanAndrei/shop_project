import React from 'react';
import { CustomButtonStyled } from './custom-button.styles';


const CustomButton = ({children, isGoogleSignIn, inverted,  ...otherProps}) =>(
  <CustomButtonStyled isGoogleSignIn={isGoogleSignIn} inverted={inverted} {...otherProps}>
  {children}
  </CustomButtonStyled>
)
export default CustomButton;