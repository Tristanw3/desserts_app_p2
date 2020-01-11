import React, { Component } from 'react';
import { FoodTextLayout, FoodImage, FoodName, FoodCost } from '../Food/FoodStyled';
import {
	PageSize,
	YellowBanner,
	ButtonRow,
	PinkContainer,
	PurchaseCard,
	AddSubtractBlock,
	PurchaseNumber
} from './PurchasePageStyled';
import { Add, Subtract, Button, StyledLink } from '../Button';
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
		confirmPurchase();
	};

	closeModalHandler = () => {
		this.setState({
			isShowing: false
		});
	};

	confirmPurchase() {
		axios
			.post(`/api/users/${auth.userId}`, {
				headers: { Authorization: `Bearer ${auth.token}` }
			})
			.then((response) => {
				this.setState({
					...this.state,
					currentUser: response.data,
					isLoggedIn: true
				});
				return <Redirect to="/" />;
			})
			.catch((err) => {
				console.log(err);
			});
	}

	
	render() {
		
		const foodList = this.props.cart.cart.map((food, index) => (
			<li key={index}>{food}</li>
		));
		
		return (
			<PageSize>
				<YellowBanner>
					<h1>Total Amount: ${this.props.cart.total}.00</h1>
					{this.state.isShowing ? <BackDrop onClick={this.closeModalHandler} /> : null}

					<ButtonRow>
						<StyledLink to="/menu">
							<Button>Back To Menu</Button>
						</StyledLink>
						<Button onClick={this.openModalHandler}>Confirm Purchase</Button>
					</ButtonRow>
				</YellowBanner>

				<PinkContainer>
					<Modal show={this.state.isShowing} close={this.closeModalHandler}>
						<p>and thanks for shopping with us</p>
					</Modal>
					 	<ol>
						 {foodList}
						</ol>	
					{/* <PurchaseCard>
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
					</PurchaseCard> */}
				</PinkContainer>
			</PageSize>
		);
	}
}
