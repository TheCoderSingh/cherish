import React from 'react';
import logo from '../../images/logo.png';

const ForgotVerfication = () => {
	return (
		<div id="forgot-verification" className="section-full-light">
			<div className="center-container">
				<img src={logo} alt="Logo" className="logo-large" />
				<p>
					A verification link has been sent to johndoe@example.com.
					Check your email and click the link to recover your account.
				</p>
			</div>
		</div>
	);
};

export default ForgotVerfication;
