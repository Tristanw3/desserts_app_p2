import React from "react";
import styled from 'styled-components';

import MenuItem from "./MenuItem";

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

export default class Menu2 {
  render() {
    return (
      <div>
        <MenuItem />
      </div> 
    );
  }
}