import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link, useHistory } from 'react-router-dom';
import Nav from '../components/Nav';

export default function LandingPage() {
	return (
		<React.Fragment>
			<Nav />
			<div className="container">
				<div className="content">
					<h1>Way For Life</h1>
					<h2>Zindagi Ek Safar Hai Suhana</h2>
				</div>
				<div class="btns">
					<button className="btn">Join Us</button>
					<button className="btn">Donate</button>
				</div>
			</div>
		</React.Fragment>
	);
}
