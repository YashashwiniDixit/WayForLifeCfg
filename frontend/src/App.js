import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import { Container } from 'react-bootstrap';
import LandingPage from './pages/LandingPage';
import AdminDashboard from './pages/AdminDashboard';
import UpdateProfile from './pages/UpdateProfile';
import SchoolDashboard from './pages/SchoolDashboard';
import VolunteerDashboard from './pages/VolunteerDashboard';
import EventPage from './pages/EventPage';
import SchoolPage from './pages/SchoolPage';
import SchoolProfile from './pages/SchoolProfile';
import EventProfile from './pages/EventProfile';
import Signup from './pages/Signup';
import FormUserDetails from './pages/SchoolSignUp';
import VolunteerEvents from './pages/VolunteerEvents';
import EventView from './pages/EventView';
import Resources from './pages/Resources';

class App extends Component {
	state = {
		visible: true
	};

	render() {
		return (
			<div className="App">
				<Router>
					<Switch>
						<Route path="/school" component={SchoolDashboard} />
						<Route
							path="/volunteer"
							component={VolunteerDashboard}
						/>
						<Route path="/login" component={Login} />
						<Route path="/signup" component={Signup} />
						<Route exact path="/" component={LandingPage} />
						<Route path="/admin" component={AdminDashboard} />
						<Route path="/profile" component={UpdateProfile} />
						<Route path="/schoolpage" component={SchoolPage} />
						<Route path="/events" component={EventPage} />
						<Route path="/viewschool" component={SchoolProfile} />
						<Route path="/viewevent" component={EventProfile} />
						<Route
							path="/schoolsignup"
							component={FormUserDetails}
						/>
						<Route path="/eventsview" component={EventView} />
						<Route
							path="/volunteerevents"
							component={VolunteerEvents}
						/>
						<Route path="/resources" component={Resources} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
