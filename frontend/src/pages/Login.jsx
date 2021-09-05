import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
	mainCont: {
		width: '80vw',
		maxWidth: '1200px',
		minHeight: '20vh',
		margin: '0rem auto',
		backgroundColor: '#ffffff',
		boxShadow:
			'rgba(50, 50, 93, 0.15) 0px 50px 100px -20px, rgba(0, 0, 0, 0.2) 0px 30px 60px -30px',
		[theme.breakpoints.down('xs')]: {
			border: '0px solid transparent',
			margin: '0rem auto',
			maxWidth: '100%',
			width: '100vw'
		}
	},
	leftCont: {
		backgroundImage: ``,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		padding: '2rem',
		color: '#222222'
	},
	textbox: {
		color: '#ffffff'
	},
	title: {
		margin: '2rem 1rem'
	},
	cardMainCont: {
		padding: '.5rem 1rem'
	},
	cardCont: {
		padding: '1rem 0rem',
		'& $iconcont': {
			color: '#ffffff'
		},
		'&:hover $iconcont': {
			color: 'red',
			backgroundColor: '#ffffff'
		}
	},
	iconcont: {
		borderRadius: '5px',
		transition: '.3s ease-out',
		padding: '10px'
	},
	icon: {
		fontSize: '3rem'
	},
	para: {
		margin: '0rem 2rem'
	},
	name: {
		padding: '0rem 1rem',
		[theme.breakpoints.down('xs')]: {
			padding: '1rem 1rem'
		}
	},
	cont: {
		padding: '.5rem 0'
	},
	dobcont: {
		padding: '1rem 1.5rem'
	},
	rightCont: {
		padding: '2rem'
	},
	label: {
		fontFamily: 'Montserrat',
		fontWeight: '600',
		margin: '10px 0rem'
	},
	formControl: {
		[theme.breakpoints.down('xl')]: {
			minWidth: 150
		},
		[theme.breakpoints.down('lg')]: {
			minWidth: 120
		},
		[theme.breakpoints.down('md')]: {
			minWidth: 90
		},
		[theme.breakpoints.down('sm')]: {
			minWidth: 120
		},
		[theme.breakpoints.down('xs')]: {
			minWidth: 80
		}
	},
	submit: {
		width: '100%',
		margin: '2rem 0rem',
		border: '1px solid #F23A3A',
		backgroundColor: '#ffffff',
		transition: '0.3s',
		color: '#F23A3A',
		'&:hover': {
			backgroundColor: '#F23A3A',
			cursor: 'pointer',
			color: '#fff'
		}
	},
	logincont: {
		padding: '.5rem 1rem',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column'
		}
	},
	login: {
		textDecoration: 'none',
		color: '#F23A3A',
		'&:hover': {
			textDecoration: 'underline'
		},
		padding: '0px 5px',
		[theme.breakpoints.down('sm')]: {
			padding: '0px 0px'
		}
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}));

export default function Login() {
	const classes = useStyles();

	const [ loading, setLoading ] = useState(false);
	const [ emailAddress, setEmailAddress ] = useState('');
	const [ password, setPassword ] = useState('');
	let history = useHistory();
	const [ data, setData ] = useState({
		emailAddress: '',
		password: ''
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('clicked');
		if (true) {
			try {
				axios
					.get('http://localhost:5000/user/' + emailAddress, {
						headers: {
							'Access-Control-Allow-Origin': '*'
						}
					})
					.then((response) => {
						console.log(response);
						const role = response.data[0].type;
						console.log(role);
						if (role == 'Admin') {
							history.push('/admin');
						} else if (role == 'School') {
							history.push('/school');
						} else {
							history.push('/volunteer');
						}
					});
			} catch (err) {
				console.log(err);
			}
		} else {
			alert('Invalid Data');
		}
	};

	return (
		<div>
			{
				<div>
					<div>
						<Header />
						<div style={{ padding: '200px 0' }}>
							<div style={{ position: 'relative' }}>
								<Grid container className={classes.mainCont}>
									<Grid
										container
										xs={12}
										md={6}
										className={classes.leftCont}
									>
										<Grid
											container
											direction="column"
											className={classes.textbox}
										>
											<Grid
												container
												direction="column"
												className={classes.cardMainCont}
											>
												<Grid
													className={classes.cardCont}
													container
													alignItems="center"
													justify="space-around"
													wrap="nowrap"
												/>
											</Grid>
											<Grid
												container
												direction="column"
												className={classes.cardMainCont}
											>
												<Grid
													className={classes.cardCont}
													container
													alignItems="center"
													justify="space-around"
													wrap="nowrap"
												>
													<Grid
														className={
															classes.paracont
														}
														container
														direction="column"
														justify="center"
													/>
												</Grid>
											</Grid>
											<Grid
												container
												direction="column"
												className={classes.cardMainCont}
											>
												<Grid
													className={classes.cardCont}
													container
													alignItems="center"
													justify="space-around"
													wrap="nowrap"
												>
													<Grid
														className={
															classes.paracont
														}
														container
														direction="column"
														justify="center"
													/>
												</Grid>
											</Grid>
										</Grid>
									</Grid>
									<Grid
										container
										xs={12}
										md={6}
										className={classes.rightCont}
									>
										<Grid
											container
											direction="column"
											className={classes.formCont}
										>
											<Typography
												variant="h3"
												className={classes.title}
											>
												Login
											</Typography>
											<Grid
												container
												alignItems="center"
												direction="column"
												justify="center"
												clasName={classes.form}
											>
												<TextField
													variant="outlined"
													margin="normal"
													required
													fullWidth
													autoFocus
													onChange={(e) =>
														setEmailAddress(
															e.target.value
														)}
												/>
												<TextField
													variant="outlined"
													margin="normal"
													required
													fullWidth
													onChange={(e) =>
														setPassword(
															e.target.value
														)}
												/>

												<Button
													disableRipple
													onClick={handleSubmit}
													className={classes.submit}
												>
													<Typography
														variant="h3"
														color="textPrimary"
													>
														Submit
													</Typography>
												</Button>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</div>
						</div>
						<Footer />
					</div>
				</div>
			}
		</div>
	);
}
