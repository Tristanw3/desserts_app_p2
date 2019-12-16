import React from "react";

import {
  MenuPage,
  MenuItem1,
  MenuItem2,
  MenuItem3,
  MenuItem4,
  IceCoffee,
  Popsicle,
  Sundae,
  FruitSalad,
  MenuText,
} from './MenuStyled';

import {
  Button,
  StyledLink,
} from '../Button';

export const MenuItems = () => (
  <MenuPage>
    <MenuItem1>
      <IceCoffee />
      <MenuText>
        <h2><b>Iced Coffee</b> ... $5.00</h2>
        <StyledLink to="/purchase"><Button>Add to cart</Button></StyledLink>
      </MenuText>
    </MenuItem1>

    <MenuItem2>
      <Popsicle />
      <MenuText>
        <h2><b>Popsicle</b> ... $5.00</h2>
        <StyledLink to="/purchase"><Button>Add to cart</Button></StyledLink>
      </MenuText>
    </MenuItem2>

    <MenuItem3>
      <Sundae />
      <MenuText>
        <h2><b>Sundae</b> ... $5.00</h2>
        <StyledLink to="/purchase"><Button>Add to cart</Button></StyledLink>
      </MenuText>
    </MenuItem3>

    <MenuItem4>
      <FruitSalad />
      <MenuText>
        <h2><b>Fruit Salad</b> ... $5.00</h2>
        <StyledLink to="/purchase"><Button>Add to cart</Button></StyledLink>
      </MenuText>
    </MenuItem4>

  </MenuPage>
);