import React, { Component } from 'react';

import { MenuCard, Food, MenuText } from './MenuItemStyled';

import { Button, StyledLink } from '../Button';

export default class MenuItem extends Component {
	render() {
		return (
			<MenuCard>
				<Food />
				<MenuText>
					<h2>
						<b>{this.props.name}</b> ... {'$' + this.props.cost}
					</h2>
					<StyledLink to="/purchase">
						<Button>Add to cart</Button>
					</StyledLink>
				</MenuText>
			</MenuCard>
		);
	}
}
