import React from "react";
import { Link } from 'react-router-dom';

import {
  CoolerHomeWrapper,
  HeaderWrapper,
  HomeHeader,
  HomeSentence,
  HomeButton,
  SignupLink
} from './HomeStyled';

export const SummerHome = () => (
  <CoolerHomeWrapper>
    <HeaderWrapper>
      <HomeHeader>Sweets To Go</HomeHeader>
      <HomeSentence>Because there's always <br /> room for dessert</HomeSentence>
    </HeaderWrapper>
    <HomeButton><StyledLink to="/login">Make An Order</StyledLink></HomeButton>
  </CoolerHomeWrapper>
);