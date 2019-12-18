import React from 'react';
import { LoginPage, YellowBanner, PinkContainer, LoginStyled, LoginHeader, AquaBanner } from './LoginStyled';
import { Button, StyledLink, SignupLink, InputStyling } from '../Button';

export default class Login extends React.Component {
	constructor(props) {
		super(props);

		// this.handleLoginBtn = this.handleLoginBtn.bind(this);

		this.state = {
			email: '',
			password: ''
		};
	}

	handleEmailForm = (e) => {
		this.setState({
			...this.state,
			email: e.target.value
		});
	};

	handlePasswordForm = (e) => {
		this.setState({
			...this.state,
			password: e.target.value
		});
	};

	handleLoginBtn = () => {
		console.log(this.props);
		this.props.user.login(this.state.email, this.state.password);
	};

	render() {
		return (
			<LoginPage>
				<YellowBanner />

				<PinkContainer>
					<LoginStyled>
						<LoginHeader>Login</LoginHeader>
						<InputStyling>
							<input type="text" placeholder="Email" onChange={this.handleEmailForm} />
							<input type="text" placeholder="Password" onChange={this.handlePasswordForm} />
						</InputStyling>
						<StyledLink to="/menu">
							<Button onClick={this.handleLoginBtn}>Login</Button>
						</StyledLink>
						<p>
							<SignupLink to="/signup">Need to Sign-Up?</SignupLink>
						</p>
					</LoginStyled>
				</PinkContainer>

				<AquaBanner />
			</LoginPage>
		);
	}
}
