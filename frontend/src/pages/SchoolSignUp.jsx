import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};

	render() {
		const { values, handleChange } = this.props;
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<Dialog open fullWidth maxWidth="sm">
						<AppBar title="Enter User Details" />
						<TextField
							placeholder="Enter School Name"
							label="School Name"
							onChange={handleChange('schoolName')}
							defaultValue={values.schoolName}
							margin="normal"
							fullWidth
						/>
						<br />
						<TextField
							placeholder="Enter Your email"
							label="Email"
							onChange={handleChange('email')}
							defaultValue={values.email}
							margin="normal"
							fullWidth
						/>
						<br />
						<TextField
							placeholder="Enter Your Address"
							label="Address"
							onChange={handleChange('address')}
							defaultValue={values.address}
							margin="normal"
							fullWidth
						/>
						<br />
						<Button
							color="primary"
							variant="contained"
							onClick={this.continue}
						>
							Continue
						</Button>
					</Dialog>
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}

export default FormUserDetails;
