import React from 'react';
import './Forgot.scss';
import logo from '../../images/logo.png';

const Forgot = () => {
	return (
		<div id="forgot" className="section-full-light">
			<div className="center-container">
				<img src={logo} alt="Logo" className="logo-large" />
				<p>Forgot your password?</p>
				<form type="POST" action="#" className="form">
					<input
						className="primary-button"
						placeholder="Enter your email or username"
					/>
					<button type="submit" className="primary-button">
						Recover
					</button>
				</form>
			</div>
		</div>
	);
};

export default Forgot;
