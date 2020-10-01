import React from 'react';
import './Signup.scss';
import logo from '../../images/logo.png';

const Signup = () => {
	return (
		<div id="signup">
			<div className="center-container">
				<img src={logo} alt="Logo" className="logo-large" />
				<form type="POST" action="#">
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
					<select>
						<option>Month</option>
					</select>
					<select>
						<option>Day</option>
					</select>
					<select>
						<option>Year</option>
					</select>
					<p>Gender</p>
					<select>
						<option>Female</option>
					</select>
				</form>
				<button className="primary-button" type="submit">
					Sign Up
				</button>
			</div>
		</div>
	);
};

export default Signup;
