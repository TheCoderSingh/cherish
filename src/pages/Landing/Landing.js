import React from 'react';
import './Landing.scss';
import logo from '../../images/logo.png';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const Landing = () => {
	return (
		<div id="landing" className="section-full-light">
			<div className="center-container">
				<img src={logo} alt="Logo" className="logo-large" />
				<p id="landing-text">
					Find people in your location and date/study/create
					professional networks or just make friends based on your
					interests.
				</p>
				<button className="primary-button">
					<span className="signup-icon">
						<EmailRoundedIcon />
					</span>
					Sign Up with Email
				</button>
				<button className="primary-button">
					<span className="signup-icon">
						<FacebookIcon />
					</span>
					Sign Up with Google
				</button>
				<button className="primary-button">
					<span className="signup-icon">
						<FacebookIcon />
					</span>
					Sign Up with Facebook
				</button>
				<button className="primary-button">
					<span className="signup-icon">
						<TwitterIcon />
					</span>
					Sign Up with Twitter
				</button>
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
