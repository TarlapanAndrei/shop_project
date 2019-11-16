import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {auth, signInWithGoogle } from '../../firebase/firebase-utils';
import {SignInContainer, Title, ButtonsDiv } from './sign-in.styled';
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
  handleSubmit = async event =>{
    event.preventDefault();
    const {email, password} = this.state;
    try{
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({
        email: '',
        password: ''
      })
    } catch(err){
      console.log('error on sign in', err.message)
    }
  }
  render(){
    const {email, password} = this.state
    return(
      <SignInContainer>
       <Title>I already have an account </Title>
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
           <ButtonsDiv>
           <CustomButton type='submit'>Sign In</CustomButton>
           <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
           </ButtonsDiv>
         </form>
      </SignInContainer>
    )
  }
}
export default SignIn;