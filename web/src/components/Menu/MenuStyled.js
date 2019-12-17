import styled from 'styled-components';

export const Food = styled.div`
  height: 30vh;
  width: 30vh;
  background: url("https://static.vecteezy.com/system/resources/previews/000/202/224/non_2x/iced-coffee-illustration-vector.jpg") no-repeat center;
  background-size: 120%;
  border-radius: 15%;
  margin: 3rem;

  &:hover{
    background-size: 130%;
  }

`;

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

export const MenuItem = styled.div`
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

export const MenuText = styled.div`
  display: block;
  color: #222;
`;

