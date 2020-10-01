import React from 'react';
import './Login.scss';
import logo from '../../images/logo.png';

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
			</div>
		</div>
	);
};

export default Login;
