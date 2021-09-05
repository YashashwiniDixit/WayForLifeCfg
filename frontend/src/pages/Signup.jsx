import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
import axios from 'axios';

export class UserForm extends Component {
	state = {
		fullName: '',
		email: '',
		password: '',
		address: '',
		occupation: '',
		interest: '',
		reason: ''
	};

	// Proceed to next step
	nextStep = () => {
		const { step } = this.state;
		this.setState({
			step: step + 1
		});
	};

	// Go back to prev step
	prevStep = () => {
		const { step } = this.state;
		this.setState({
			step: step - 1
		});
	};

	// Handle fields change
	handleChange = (input) => (e) => {
		this.setState({ [input]: e.target.value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		if (true) {
			try {
				axios
					.get('http://localhost:5000/user', this.state)
					.then((response) => {
						console.log(response);
					});
			} catch (err) {
				console.log(err);
			}
		} else {
			alert('Invalid Data');
		}
	};

	render() {
		const { step } = this.state;
		const {
			fullName,
			email,
			address,
			occupation,
			interest,
			reason
		} = this.state;
		const values = {
			fullName,
			email,
			address,
			occupation,
			interest,
			reason
		};

		return (
			<FormUserDetails
				nextStep={this.nextStep}
				handleChange={this.handleChange}
				values={values}
				onSubmit={this.handleSubmit}
			/>
		);
		// switch (step) {
		// case 1:
		// case 2:
		// 	return (
		// 		<FormPersonalDetails
		// 			nextStep={this.nextStep}
		// 			prevStep={this.prevStep}
		// 			handleChange={this.handleChange}
		// 			values={values}
		// 		/>
		// 	);
		// case 3:
		// 	return (
		// 		<Confirm
		// 			nextStep={this.nextStep}
		// 			prevStep={this.prevStep}
		// 			values={values}
		// 		/>
		// 	);
		// case 4:
		// return <Success />;
		// default:
		// 	console.log('This is a multi-step form built with React.');
	}
}

export default UserForm;
