
import styled from 'styled-components';

export const MenuPage = styled.div`
  height: 90vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #9bf2d7;

  &:hover{
    background: hotpink;
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    }
`;

export const MenuItem1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffa8ca;
  height: 45vh;
  box-sizing: border-box;

  &:hover{
    background: hotpink;
  }
  `;


export const MenuItem2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f2e266;
  height: 45vh;

  &:hover{
    background: hotpink;
  }
`;

export const MenuItem3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: aqua;
  height: 45vh;

  &:hover{
    background: hotpink;
  }
`;

export const MenuItem4 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: orange;
  height: 45vh;

  &:hover{
    background: hotpink; 
  }
`;

export const MenuText = styled.div`
  display: block;
`;

