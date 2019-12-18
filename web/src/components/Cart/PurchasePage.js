import React, { Component } from 'react';

import { FoodTextLayout, FoodImage, FoodName, FoodCost } from '../Food/FoodStyled';
import { PageSize, AquaBanner, PinkContainer, YellowBanner, PurchaseCard } from './PurchasePageStyled';

export default class PurchasePage extends Component {
  render() {
    return (
      <PageSize>
        <AquaBanner />
        <PinkContainer>
          <PurchaseCard>
            <FoodImage />
            <FoodTextLayout>
              <FoodName>Iced Coffee</FoodName>
              <FoodCost>... $5.00</FoodCost>
            </FoodTextLayout>
          </PurchaseCard>

        </PinkContainer>
        <YellowBanner />
      </PageSize>
    );
  }
}