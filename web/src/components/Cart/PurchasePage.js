import React, { Component } from 'react';

import { FoodTextLayout, FoodImage, FoodName, FoodCost } from '../Food/FoodStyled';
import { PageSize, AquaBanner, PinkContainer, YellowBanner, PurchaseCard, AddSubtractBlock } from './PurchasePageStyled';
import { Add, Subtract, Button } from '../Button';

export default class PurchasePage extends Component {
  render() {
    return (
      <PageSize>
        <PinkContainer>
          <PurchaseCard>

            <FoodImage />

            <FoodTextLayout>
              <FoodName>Iced Coffee</FoodName>
              <FoodCost>... $5.00</FoodCost>
            </FoodTextLayout>

            <AddSubtractBlock>
              <Add>+</Add>
              <Subtract>-</Subtract>
            </AddSubtractBlock>

          </PurchaseCard>

        </PinkContainer>
        <AquaBanner>
          <h1>Total Amount: $000</h1>
          <Button>Confirm Purchase</Button>
        </AquaBanner>
      </PageSize>
    );
  }
}