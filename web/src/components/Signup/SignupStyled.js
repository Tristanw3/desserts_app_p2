import styled from 'styled-components';

export const SignupBanner = styled.div`
  height: 90vh;
  background: #f2e266;
`;

export const SignupWrapperStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  background-color: #9bf2d7;
  height: 50vh;
`;

export const SignupStyled = styled.section`
  margin-top: 20vh; 
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 50vh;
  width: 100%;
  background: #ffa8ca;
  padding: 2rem;
`;

export const SignupHeader = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  color: #222;
  text-shadow: 4px 4px hotpink;
  margin-bottom: 1.5rem;
`;

export const ButtonSignup = styled.button`
  background:hotpink;
  border-radius: 30px;
  border: 3px solid white;
  color: white;
  font-weight: 600;
  font-size: 1.5rem;
  padding: 0.25em 1em;
  box-shadow: 4px 4px #222;
  width: 300px;
`;