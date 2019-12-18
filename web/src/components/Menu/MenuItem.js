import React, { Component } from 'react';

import { FoodTextLayout, FoodImage, FoodName, FoodCost } from '../Food/FoodStyled';
import { MenuCard } from './MenuItemStyled';
import { Button, StyledLink } from '../Button';

export default class MenuItem extends Component {
	render() {
		return (
			<MenuCard>
				<FoodImage />
				<FoodTextLayout>
					<FoodName>{this.props.name}</FoodName>
					<FoodCost>... {'$' + this.props.cost}</FoodCost>
					<StyledLink to="/purchase">
						<Button>Add to cart</Button>
					</StyledLink>
				</FoodTextLayout>
			</MenuCard>
		);
	}
}
