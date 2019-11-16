import React from 'react';
import { SignInSignUp } from './sign-in-and-sign-up.styled';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUp = () =>(
  <SignInSignUp>
    <SignIn />
    <SignUp />
  </SignInSignUp>
)
export default SignInAndSignUp;