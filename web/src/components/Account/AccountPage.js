import React, { Component } from 'react';
import { PageSize, YellowBanner, YellowBannerHeader, AquaContainerHeader } from './AccountPageStyled';
import { AccountCard, ItemSection, DateSection, TotalSection } from './AccountCardStyled';
import { FoodThumbnail } from '../Food/FoodStyled';

export default class AccountPage extends Component {
	render() {
		return (
			<PageSize>
				<YellowBanner>
					<YellowBannerHeader>
						<h1>Purchase History</h1>
						<p>Username: </p>
						<p>Email</p>
					</YellowBannerHeader>
				</YellowBanner>
				<AquaContainerHeader>
					<h2>Item</h2>
					<h2>Date</h2>
					<h2>Total</h2>
				</AquaContainerHeader>

				<AccountCard>
					<ItemSection>
						<FoodThumbnail />
						<FoodThumbnail />
					</ItemSection>

					<DateSection>21-Dec-2019</DateSection>
					<TotalSection>$000</TotalSection>
				</AccountCard>
			</PageSize>
		);
	}
}
