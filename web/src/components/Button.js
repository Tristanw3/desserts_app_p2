import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Button = styled.button`
  background:hotpink;
  border-radius: 40px;
  border: 3px solid white;
  color: white;
  font-weight: 400;
  font-size: 1.5rem;
  margin: 2vh 5vh;
  padding: 0.25em 1em;
  box-shadow: 4px 4px #222;
  width: 300px;

  &:hover{
    box-shadow: none;
    background: #f2e266;
  }
`;

export const StyledLink = styled(Link)`
  color: white;
  font-weight: 600;

  &:hover{
    text-decoration: none;
    color: white;
  }
`;

export const SignupLink = styled(Link)`
  color: #222;

  &:hover{
    color: hotpink;
    text-decoration: none;
  }
`;