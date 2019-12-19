import React, { Component } from 'react';
import { FoodTextLayout, FoodImage, FoodName, FoodCost } from '../Food/FoodStyled';
import { PageSize, AquaBanner, PinkContainer, PurchaseCard, AddSubtractBlock, PurchaseNumber } from './PurchasePageStyled';
import { Add, Subtract, Button } from '../Button';
import { BackDrop } from '../Modal/ModalStyled';
import { Modal } from '../Modal/Modal';

export default class PurchasePage extends Component {
	constructor() {
		super();

		this.state = {
			isShowing: false
		};
	}

	openModalHandler = () => {
		this.setState({
			isShowing: true
		});
	};

	closeModalHandler = () => {
		this.setState({
			isShowing: false
		});
	};

	render() {
		return (
			<PageSize>
				<PinkContainer>
					<Modal show={this.state.isShowing} close={this.closeModalHandler}>
						<p>and thanks for shopping with us</p>
					</Modal>

					<PurchaseCard>
						<FoodImage />

						<FoodTextLayout>
							<FoodName>Iced Coffee</FoodName>
							<FoodCost>... $5.00</FoodCost>
						</FoodTextLayout>

						<AddSubtractBlock>
							<Add>+</Add>
							<PurchaseNumber>0</PurchaseNumber>
							<Subtract>-</Subtract>
						</AddSubtractBlock>
						
					</PurchaseCard>
				</PinkContainer>
				<AquaBanner>
					<h1>Total Amount: $000</h1>

					{this.state.isShowing ? <BackDrop onClick={this.closeModalHandler} /> : null}

					<Button onClick={this.openModalHandler}>Confirm Purchase</Button>
				</AquaBanner>
			</PageSize>
		);
	}
}
