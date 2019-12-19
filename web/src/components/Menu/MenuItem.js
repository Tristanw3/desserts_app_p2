import React, { Component } from 'react';

import { FoodTextLayout, FoodImage, FoodName, FoodCost } from '../Food/FoodStyled';
import { MenuCard } from './MenuItemStyled';
import { MenuButton, StyledLink } from '../Button';

export default class MenuItem extends Component {
	render() {
		return (
			<MenuCard>
				<FoodImage />
				<FoodTextLayout>
					<FoodName>{this.props.title}</FoodName>
					<FoodCost>... {'$' + this.props.cost}</FoodCost>
					<StyledLink to="/purchase">
						<MenuButton onClick={() => this.props.addToCart('hello')}>Add to cart</MenuButton>
					</StyledLink>
				</FoodTextLayout>
			</MenuCard>
		);
	}
}
