import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';

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

class NavigationBar extends React.Component {
	handleLogoutBtn = () => {
		this.props.user.logout();		
	};

	render() {
		console.log(this.props.isLoggedIn);

		return (
			<Styles>
				<Navbar expand="lg">
					<Navbar.Brand >
						<Link to="/">Sweets To Go</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Item>
								<Nav.Link >
									<Link to='/'>Home</Link>
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link>
									<Link to='/menu'>Menu</Link>
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								{this.props.user.isLoggedIn ? (
									<Nav.Link onClick={this.handleLogoutBtn}>
										Logout
									</Nav.Link>
								) : (
									<Nav.Link >
										<Link to="/login">Login</Link>
									</Nav.Link>
								)}
							</Nav.Item>
							<Nav.Item>
								{sessionStorage.auth ? 
								<Nav.Link >
									<Link to="/account">Account</Link> 
								</Nav.Link> : null}
							</Nav.Item>
							<Nav.Item>
								<Nav.Link>
									<Link to='/purchase'><i className="fas fa-shopping-cart" /></Link>
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Styles>
		);
	}
}


export default withRouter(NavigationBar)