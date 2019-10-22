import React from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase-utils';
import './sign-up.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

class SignUp extends React.Component{
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  handleChange = event =>{
    const {name, value } = event.target;
    this.setState({
      [name]: value
    })
  }
  handleSubmit = async event =>{
    event.preventDefault();
    const {displayName, email, password, confirmPassword} = this.state;
    if(password !== confirmPassword){
      alert("password don't match");
      return;
    }
    try{
    const {user} = await auth.createUserWithEmailAndPassword(email, password);
    await createUserProfileDocument(user,{displayName})
    this.setState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
  }catch(err){
    console.error('error on sign up', err.message)
  }
  }
  render(){
    const {displayName, email, password, confirmPassword} = this.state;
    return(
      <div className='sign-up'>
         <h2 className='title'>I do not have an account</h2>
         <span>Sign Up with email and password</span>
         <span>Sign up</span>
         <form 
            onSubmit={this.handleSubmit}
            className='sign-up-form'
            >
           <FormInput 
             name='displayName'
             value={displayName}
             handleChange={this.handleChange}
             required
             label='Name'
             type='text'
           />
           <FormInput 
             name='email'
             value={email}
             handleChange={this.handleChange}
             required
             label='email'
             type='email'
           />
           <FormInput 
             name='password'
             value={password}
             handleChange={this.handleChange}
             required
             label='password'
             type='password'
           />
           <FormInput 
             name='confirmPassword'
             value={confirmPassword}
             handleChange={this.handleChange}
             required
             label='confirmPassword'
             type='password'
           />
          <CustomButton type='submit'>Sign Up</CustomButton>
         </form>
      </div>
    )
  }
}
export default SignUp;