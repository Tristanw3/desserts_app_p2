import React, { Component } from 'react';
import axios from 'axios';

import MenuItem from './MenuItem';
import { MenuPageStyling } from './MenuPageStyled';

export default class MenuPage extends Component {
	state = {
		lillian: []
	};

	componentDidMount() {
		let auth = JSON.parse(sessionStorage.getItem('auth'));
		if (!auth) return;

		axios
			.get(`/api/foods`, {
				headers: { Authorization: `Bearer ${auth.token}` }
			})
			.then((response) => {
				this.setState({
					lillian: response.data
				});
				console.log(this.state.lillian);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		const foods = this.state.lillian.map((food, index) => (
			<MenuItem
				key={index}
				addToCart={this.props.cart.addToCart}
				title={food.title}
				cost={food.cost}
				image={food.image}
				background={food.Background}
			/>
		));

		return <MenuPageStyling>{foods}</MenuPageStyling>;
	}
}
