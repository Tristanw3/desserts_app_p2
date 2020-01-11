import React, { Component } from 'react';

import { FoodTextLayout, FoodImage, FoodName, FoodCost } from '../Food/FoodStyled';
import { MenuCard } from './MenuItemStyled';
import { MenuButton, StyledLink } from '../Button';

export default class MenuItem extends Component {
	render() {
		return (
			<MenuCard background={this.props.background}>
				<FoodImage image={this.props.image} />
				<FoodTextLayout>
					<FoodName>{this.props.title}</FoodName>
					<FoodCost>... {'$' + this.props.cost}</FoodCost>
					<StyledLink to='#'>
						<MenuButton onClick={() => this.props.addToCart(this.props.title, this.props.cost)}>Add to cart</MenuButton>
					</StyledLink>
				</FoodTextLayout>
			</MenuCard>
		);
	}
}
