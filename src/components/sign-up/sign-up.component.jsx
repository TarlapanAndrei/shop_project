import React from 'react';
import './sign-up.styles.scss';

class SignUp extends React.Component{
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  render(){
    return(
      <div className='sign-up'>
         <h1>s</h1>
         <span>Sign up</span>
      </div>
    )
  }
}
export default SignUp;