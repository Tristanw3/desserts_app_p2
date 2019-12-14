import React from "react";

import {
  LoginBanner,
  LoginWrapperStyled,
  LoginStyled,
  LoginHeader,
  InputStyling,
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
               <InputStyling>
                 <input type="text" placeholder="Email" />
                 <input type="text" placeholder="Password" />
               </InputStyling>
               <StyledLink to="/order">
                 <Button>Login</Button>
               </StyledLink>
               <p>
                 <SignupLink to="/signup">Need to Sign-Up?</SignupLink>
               </p>
             </LoginStyled>
           </LoginWrapperStyled>
         </LoginBanner>
       );

