import React from "react";

import {
  LoginBanner,
  LoginWrapperStyled,
  LoginStyled,
  LoginHeader,
} from './LoginStyled';

import {
  Button,
  StyledLink,
  SignupLink,
} from '../Button';

export const Login = () => (
  <LoginBanner>
    <LoginWrapperStyled>
      <LoginStyled>
        <LoginHeader>Login</LoginHeader>
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <StyledLink to="/order"><Button>Login</Button></StyledLink>
        <p><SignupLink to="/signup">Need to Sign-Up?</SignupLink></p>
      </LoginStyled>
    </LoginWrapperStyled>
  </LoginBanner>
);

