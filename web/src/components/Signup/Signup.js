import React from "react";

import {
  SignupBanner,
  SignupWrapperStyled,
  SignupStyled,
  SignupHeader,
} from './SignupStyled';

import {
  Button,
  StyledLink,
  SignupLink,
} from '../Button';

export const Signup = () => (
  <SignupBanner>
    <SignupWrapperStyled>
      <SignupStyled>
        <SignupHeader>Sign-Up</SignupHeader>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <StyledLink to="/order"><Button>Sign-Up</Button></StyledLink>
        <p><SignupLink to="/login">Already have an account?</SignupLink></p>
      </SignupStyled>
    </SignupWrapperStyled>
    </SignupBanner>
);