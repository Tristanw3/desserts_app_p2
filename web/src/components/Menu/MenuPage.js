import React, { Component } from 'react';

import MenuItem from './MenuItem';
import { MenuPageStyling } from './MenuPageStyled';

export default class MenuPage extends Component {
	render() {
		return (
			<MenuPageStyling>
				<MenuItem name="Coffee" cost="2.00" />
				<MenuItem name="name2" cost="3.00" />
				<MenuItem name="name3" cost="4.00" />
				<MenuItem name="name4" cost="5.00" />
			</MenuPageStyling>
		);
	}
}
