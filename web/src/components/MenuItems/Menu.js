import React from "react";

import {
  MenuPage,
  MenuItem1,
  MenuItem2,
  MenuItem3,
  MenuItem4,
  MenuText,
} from './MenuStyled';

import {
  Button,
  StyledLink,
} from '../Button';

import {
  IcedCoffee,
  Popsicle,
  Sundae,
  FruitSalad,
} from './ColdDesserts';

import {
  HotCoffee,
  BananaSplit,
  Donut,
  Pancakes,
} from './WarmDesserts';

export const MenuItems = () => (
  <MenuPage>
    <MenuItem1>
      <IcedCoffee />
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

    <MenuItem1>
      <HotCoffee />
      <MenuText>
        <h2><b>Hot Coffee</b> ... $5.00</h2>
        <StyledLink to="/purchase"><Button>Add to cart</Button></StyledLink>
      </MenuText>
    </MenuItem1>

    <MenuItem2>
      <BananaSplit />
      <MenuText>
        <h2><b>Banana Split</b> ... $5.00</h2>
        <StyledLink to="/purchase"><Button>Add to cart</Button></StyledLink>
      </MenuText>
    </MenuItem2>

    <MenuItem3>
      <Donut />
      <MenuText>
        <h2><b>Donut</b> ... $5.00</h2>
        <StyledLink to="/purchase"><Button>Add to cart</Button></StyledLink>
      </MenuText>
    </MenuItem3>

    <MenuItem4>
      <Pancakes />
      <MenuText>
        <h2><b>Pancakes</b> ... $5.00</h2>
        <StyledLink to="/purchase"><Button>Add to cart</Button></StyledLink>
      </MenuText>
    </MenuItem4>

  </MenuPage>
);