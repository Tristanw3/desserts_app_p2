import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
	.navbar {
		background-color: #222;
	}

	.navbar-brand {
		font-weight: 600;
		color: #ffa8ca;
		font-size: 1.5rem;
		padding-left: 2rem;
		letter-spacing: 1px;
	}

	.navbar-nav .nav-link {
		color: #9bf2d7;
		font-weight: 400;
		padding: 1rem 2rem;

		&:hover {
			color: white;
		}
	}
`;

export default class NavigationBar extends React.Component {
	state = {
		isLoggedIn: this.props.user.isLoggedIn
	};

	handleLogoutBtn = () => {
		this.props.user.logout();
	};

	render() {
		console.log(this.props.isLoggedIn);

		return (
			<Styles>
				<Navbar expand="lg">
					<Navbar.Brand href="/">Sweets To Go</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Item>
								<Nav.Link href="/">Home</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href="/menu">Menu</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								{this.state.isLoggedIn ? (
									<Nav.Link href="/" onClick={this.handleLogoutBtn}>
										Logout
									</Nav.Link>
								) : (
									<Nav.Link href="/login">Login</Nav.Link>
								)}
							</Nav.Item>
							<Nav.Item>
								{sessionStorage.auth ? <Nav.Link href="/account">Account </Nav.Link> : null}
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href="/purchase">
									<i className="fas fa-shopping-cart" />
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Styles>
		);
	}
}
