import React from "react";
import { LoginPage, YellowBanner, PinkContainer, LoginStyled, LoginHeader, AquaBanner} from './LoginStyled';
import { Button, StyledLink, SignupLink, InputStyling } from '../Button';
import axios from 'axios';

export default class Login extends React.Component {
  state = {
    email: '',
    password: '' 
  };

  handleEmail = (e) => {
    this.setState({
      ...this.state, 
      email: e.target.value
    });
  };

  handlePassword = (e) => {
    this.setState({
      ...this.state, 
      password: e.target.value
    });
    
  };

  //MICHAEL TO CONTINUE WITH THE BELOW FUNCTION
  handleLogin = (e) => {
    const user = {
			email: this.state.email,
			password: this.state.password	
    };
    console.log(user)
    axios.post('/api/auth/get_token', {user})
    .then(resp => {
      console.log('Got Token')
      console.log(resp.data.token);
    })
    .catch(err => {
      console.log('Failed to create user with error: ')
      console.log(err);
    });
  }
  render(){
    return(
    <LoginPage>
      <YellowBanner/>

      <PinkContainer>
            <LoginStyled>
              <LoginHeader>Login</LoginHeader>
              <InputStyling>
                <input type="text" placeholder="Email" onChange={this.handleEmail} />
                <input type="text" placeholder="Password" onChange={this.handlePassword} />
              </InputStyling>
              <StyledLink to="/menu">
                <Button onClick={this.handleLogin}>Login</Button>
              </StyledLink>
              <p>
                <SignupLink to="/signup">Need to Sign-Up?</SignupLink>
              </p>
            </LoginStyled>
      </PinkContainer>
        
      <AquaBanner/>
    </LoginPage>
    )
  }
  
}
