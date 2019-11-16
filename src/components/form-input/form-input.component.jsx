import React from 'react';
import { GroupContainer, FormInputContainer, FormInputLabel} from './form-imput.styled';

const FormInput = ({handleChange, label, ...otherProps}) =>(
  <GroupContainer>
  <FormInputContainer 
    {...otherProps}
    onChange={handleChange}
  />
  {
    label ? (<FormInputLabel className={otherProps.value.length? 'shrink':''}>{label}</FormInputLabel>): null
  }
  </GroupContainer>
)
export default FormInput;