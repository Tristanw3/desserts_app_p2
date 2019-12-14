import styled from 'styled-components';

export const LoginBanner = styled.div`
  height: 90vh;
  background: #9bf2d7;
`;

export const LoginWrapperStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  background-color: #f2e266;
  height: 50vh;
`;

export const LoginStyled = styled.section`
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

export const LoginHeader = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  color: #222;
  text-shadow: 4px 4px hotpink;
  margin-bottom: 1.5rem;
`;
