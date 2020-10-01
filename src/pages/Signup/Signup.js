import React from 'react';
import './Signup.scss';
import logo from '../../images/logo.png';

const Signup = () => {
	return (
		<div id="signup" className="section-full-light section-full-right">
			<div className="center-container">
				<img src={logo} alt="Logo" className="logo-large" />
				<form type="POST" action="#" className="form">
					<input type="text" name="fname" placeholder="First Name" />
					<input type="text" name="lname" placeholder="Last Name" />
					<input type="text" name="uname" placeholder="Username" />
					<input type="email" name="email" placeholder="Email" />
					<input type="password" name="pass" placeholder="Password" />
					<input
						type="password"
						name="rpass"
						placeholder="Repeat Password"
					/>
					<p>Birthday</p>
					<div id="birthday">
						<select>
							<option>Month</option>
						</select>
						<select>
							<option>Day</option>
						</select>
						<select>
							<option>Year</option>
						</select>
					</div>
					<div id="gender">
						<select>
							<option>Gender</option>
						</select>
					</div>
				</form>
				<button className="primary-button" type="submit">
					Sign Up
				</button>
			</div>
		</div>
	);
};

export default Signup;
