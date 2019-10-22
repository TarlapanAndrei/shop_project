import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase-utils';
class SignIn extends React.Component{
   constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }
  handleChange = event =>{
    const {value, name} = event.target;
    this.setState ({
      [name]: value
    })
  }
  handleSubmit = event =>{
    event.preventDefault();
    this.setState({
      email: '',
      password: ''
    })
  }
  render(){
    const {email, password} = this.state
    return(
      <div className='sign-in'>
       <h1 className='title'>I already have an account </h1>
         <span>Sign in with email and passord.</span>
         <form onSubmit={this.handleSubmit}>
           <FormInput
             name='email'
             value={email}
             handleChange={this.handleChange}
             type='email'
             required
             label='email'
           />
           <FormInput
             name='password'
             value={password}
             handleChange={this.handleChange}
             type='password'
             required
             label='Password'
           />
           <div className='buttons'>
           <CustomButton type='submit' onClick={this.handleSubmit}>Sign In</CustomButton>
           <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
           </div>
         </form>
      </div>
    )
  }
}
export default SignIn;