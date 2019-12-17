import styled from 'styled-components';

export const SignupPage = styled.div`
  height: 90vh;
`;

export const YellowBanner = styled.div`
  height: 10vh;
  background: #f2e266;
`;

export const AquaBanner = styled.div`
  height: 10vh;
  background: #9bf2d7;
`;

export const PinkContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  background-color: #ffa8ca;
  height: 70vh;
  width: 100%;
`;

export const SignupStyled = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const SignupHeader = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  color: #222;
  text-shadow: 4px 4px hotpink;
  margin-bottom: 1.5rem;
`;

export const InputStyling = styled.div`
  input {
    display: block;
    width: 300px;
    height: 30px;
    margin-bottom: 1rem;
    border: none;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 100px;
    text-align: center;
    font-size: 20px;
    padding: 1.2rem;
  }

  input:hover {
    background: white;
  }

  textarea:focus,
  input:focus {
    color: hotpink;
  }

  input,
  select,
  textarea {
    color: #222;
  }
`;
