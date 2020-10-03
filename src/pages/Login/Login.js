import React from 'react';
import './Login.scss';
import logo from '../../images/logo.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const Login = () => {
	return (
		<div id="login" className="section-full-light section-full-right">
			<div className="center-container">
				<img src={logo} alt="Logo" className="logo-large" />
				<form type="POST" action="#" className="form">
					<input type="email" name="email" placeholder="Email" />
					<input type="password" name="pass" placeholder="Password" />
				</form>
				<button className="primary-button" type="submit">
					Login
				</button>
				<h4>Login with</h4>
				<div className="signin">
					<button className="signin-button">
						<span>
							<FacebookIcon />
						</span>
					</button>
					<button className="signin-button">
						<span>
							<FacebookIcon />
						</span>
					</button>
					<button className="signin-button">
						<span>
							<TwitterIcon />
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
