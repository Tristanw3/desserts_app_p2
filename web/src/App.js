import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import { SummerHome } from './components/Home/SummerHome';
// import {WinterHome} from './components/Home/WinterHome';
// import { MenuItems } from './components/MenuItems/Menu';
import Account from './components/Account/AccountPage';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { NoMatch } from './components/NoMatch';
import NavigationBar from './components/NavigationBar';
import MenuPage from './components/Menu/MenuPage';
import PurchasePage from './components/Cart/PurchasePage';

// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
	constructor(props) {
		super(props);
		let auth = JSON.parse(sessionStorage.getItem('auth'));
		this.state = {
			isLoggedIn: !!auth ? true : false,
			currentUser: null,
			cart: [],
			cartCost: 0
		};
	}

	componentDidMount() {
		this.getUser();
	}

	getUser() {
		let auth = JSON.parse(sessionStorage.getItem('auth'));
		if (!auth) return;
		console.log(auth);

		axios
			.get(`/api/users/${auth.userId}`, {
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

	handleLogin(email, password) {
		axios
			.post('/api/auth/get_token', {
				email: email,
				password: password
			})
			.then((response) => {
				sessionStorage.setItem('auth', JSON.stringify(response.data));
				this.getUser();
			})
			.catch((err) => {
				console.log('Failed to login user with error: ');
				console.log(err);
			});
	}

	handleLogout() {
		sessionStorage.clear();
		this.setState({ ...this.state, currentUser: null, isLoggedIn: false });
	}

	handleAddToCart = (obj) => {
		console.log(this.state);

		let cartArr = this.state.cart.push(obj);
		// console.log(cartArr);
		this.setState({ ...this.state, cart: cartArr });

		// console.log(this.state);
	};

	render() {
		const userProps = {
			isLoggedIn: this.state.isLoggedIn,
			currentUser: this.state.currentUser,
			logout: () => this.handleLogout(),
			login: (email, pass) => this.handleLogin(email, pass)
		};

		const cartProps = {
			cartCount: null,
			addToCart: this.handleAddToCart
		};

		return (
			<React.Fragment>
				<NavigationBar user={userProps} />
				<Router>
					<Switch>
						<Route exact path="/" component={SummerHome}>
							<SummerHome user={userProps} cart={cartProps} />
						</Route>
						<Route path="/menu" component={MenuPage}>
							<MenuPage user={userProps} cart={cartProps} />
						</Route>
						<Route path="/purchase" component={PurchasePage}>
							<PurchasePage user={userProps} cart={cartProps} />
						</Route>
						<Route path="/account" component={Account}>
							<Signup user={userProps} cart={cartProps} />
						</Route>
						<Route path="/login" component={Login}>
							<Login user={userProps} cart={cartProps} />
						</Route>
						{/* <Route path="/signup" component={Signup} user={userProps} cart={cartProps}/> */}
						<Route path="/signup">
							<Signup user={userProps} cart={cartProps} />
						</Route>

						<Route component={NoMatch} />
					</Switch>
				</Router>
			</React.Fragment>
		);
	}
}

export default App;
