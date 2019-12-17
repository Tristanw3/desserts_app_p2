import React from "react";

import {
  MenuPage,
  MenuItem,
  Food,
  MenuText,
} from './MenuStyled';

import {
  Button,
  StyledLink,
} from '../Button';

export const MenuPageLayout = () => (
  <MenuPage>
    <MenuItem>
      <Food />
      <MenuText>
        <h2><b>Iced Coffee</b> ... $5.00</h2>
        <StyledLink to="/purchase"><Button>Add to cart</Button></StyledLink>
      </MenuText>
    </MenuItem>

  </MenuPage>
);