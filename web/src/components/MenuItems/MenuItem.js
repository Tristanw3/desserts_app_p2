import React, { Component } from 'react';
import styled from 'styled-components';

import {
  Button,
  StyledLink,
} from '../Button';

export const MenuBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45vh;
  box-sizing: border-box;

  &:hover{
    background: hotpink;
  }
  `;

export const FoodItem = styled.div`
  height: 30vh;
  width: 30vh;
  /* background: url("https://static.vecteezy.com/system/resources/previews/000/202/224/non_2x/iced-coffee-illustration-vector.jpg") no-repeat center; */
  background-size: 120%;
  border-radius: 15%;
  margin: 3rem;

  &:hover{
    background-size: 130%;
  }
`;

export const MenuText = styled.div`
  display: block;
`;

  export default class MenuItem extends Component {
    render() {
      return (
        <MenuBlock>
          <FoodItem />
          <MenuText>
            <h2><b>Fruit Salad</b> ... $5.00</h2>
            <StyledLink to="/purchase"><Button>Add to cart</Button></StyledLink>
          </MenuText>
        </MenuBlock>
      );
    }
  }


