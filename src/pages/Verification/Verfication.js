import React from 'react';
import './Verification.scss';
import logo from '../../images/logo.png';

const Verfication = () => {
	return (
		<div id="verification" className="section-full-light">
			<div className="center-container">
				<img src={logo} alt="Logo" className="logo-large" />
				<p>
					A verification link has been sent to johndoe@example.com.
					Check your email and click the link to verify your account.
				</p>
			</div>
		</div>
	);
};

export default Verfication;
