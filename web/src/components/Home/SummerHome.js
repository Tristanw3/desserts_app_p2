import React from "react";

import {
  WarmerHomeWrapper,
  HeaderWrapper,
  HomeHeader,
  HomeSentence,
  StyledLink
} from './HomeStyled';

import {
  Button,
} from '../Button';

export const SummerHome = () => (
  <WarmerHomeWrapper>
    <HeaderWrapper>
      <HomeHeader>Sweets To Go</HomeHeader>
      <HomeSentence>Because there's always <br/> room for dessert</HomeSentence>
    </HeaderWrapper>
    <StyledLink to="/login"><Button>Make An Order</Button></StyledLink>
  </WarmerHomeWrapper>
);