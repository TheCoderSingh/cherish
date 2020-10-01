import React from 'react';
import './Landing.scss';
import logo from '../../images/logo.png';

const Landing = () => {
	return (
		<div id="landing">
			<div className="center-container">
				<img src={logo} alt="Logo" className="logo-large" />
				<p id="landing-text">
					Find people in your location and date/study/create
					professional networks or just make friends based on your
					interests.
				</p>
				<button className="primary-button">Sign Up</button>
				<p id="landing-signin-text">
					Already have an account?
					<a href="/" className="link">
						{' '}
						Login
					</a>
				</p>
			</div>
		</div>
	);
};

export default Landing;
