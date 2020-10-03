import React from 'react';
import './Home.scss';
import logo from '../../images/logo.png';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import MessageIcon from '@material-ui/icons/Message';
import SettingsIcon from '@material-ui/icons/Settings';

const Home = () => {
	return (
		<div id="home" className="section-full-light">
			<header>
				<img src={logo} alt="Logo" className="logo-small" />
				<nav>
					<div className="nav-icon">
						<HomeIcon />
					</div>
					<div className="nav-icon">
						<PersonIcon />
					</div>
					<div className="nav-icon">
						<MessageIcon />
					</div>
					<div className="nav-icon">
						<SettingsIcon />
					</div>
				</nav>
			</header>
			<div className="center-container">
				<div id="home-text">
					<img src={logo} className="logo-smallest" alt="Logo" /> will
					connect you to people that are looking to do the same.
				</div>
				<div id="options">
					<button className="secondary-button">
						<span>Date</span>
					</button>
					<button className="primary-button">
						<span>Study</span>
					</button>
					<button className="secondary-button">
						<span>Work</span>
					</button>
					<button className="primary-button">
						<span>Make Friends</span>
					</button>
					<button className="secondary-button">
						<span>Make Professional Network</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
