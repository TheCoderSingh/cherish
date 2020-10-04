import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Verification from './pages/Verification/Verfication';
import Forgot from './pages/Forgot/Forgot';
import ForgotVerification from './pages/Forgot/ForgotVerification';
import Home from './pages/Home/Home';

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/home">
						<Home />
					</Route>
					<Route path="/welcome">
						<Landing />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/signup">
						<Signup />
					</Route>
					<Route path="/verification">
						<Verification />
					</Route>
					<Route path="/forgot">
						<Forgot />
					</Route>
					<Route path="/forgot-verification">
						<ForgotVerification />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
