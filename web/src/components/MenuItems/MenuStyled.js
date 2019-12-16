import styled from 'styled-components';

export const IceCoffee = styled.div`
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

export const Popsicle = styled.div`
  height: 30vh;
  width: 30vh;
  background: url("https://static.vecteezy.com/system/resources/previews/000/535/056/non_2x/vector-ice-pop.jpg") no-repeat center;
  background-size: 120%;
  border-radius: 15%;
  margin: 3rem;

  &:hover{
    background-size: 130%;
  }
`;

export const Sundae = styled.div`
  height: 30vh;
  width: 30vh;
  background: url("https://static.vecteezy.com/system/resources/previews/000/643/121/non_2x/vector-twisted-soft-ice-cream-on-pastel-background.png") no-repeat center;
  background-size: 120%;
  border-radius: 15%;
  margin: 3rem;

  &:hover{
    background-size: 130%;
  }
`;

export const FruitSalad = styled.div`
  height: 30vh;
  width: 30vh;
  background: url("https://static.vecteezy.com/system/resources/previews/000/271/037/non_2x/color-acai-bowl-vector.jpg") no-repeat center;
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

