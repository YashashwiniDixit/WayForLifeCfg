import React from 'react';
import logo from './../assets/logo.png';
import GoogleTranslate from './translate/GoogleTranslate';

const Nav = () => {
	return (
		<div className="navbar">
			<img alt="logo" className="logo" src={logo} />
			<GoogleTranslate />
			<ul>
				<li>About</li>
				<li>Activities</li>
				<li>Contact</li>
				<li>Join Us</li>
				<li>
					<a href="/login">Log In</a>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
