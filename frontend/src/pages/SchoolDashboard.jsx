import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EventIcon from '@material-ui/icons/Event';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ForumIcon from '@material-ui/icons/Forum';
import ChatBot from '../components/Chat';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	toolbar: {
		paddingRight: 24 // keep right padding when drawer closed
	},
	toolbarIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create([ 'width', 'margin' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create([ 'width', 'margin' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: 36
	},
	menuButtonHidden: {
		display: 'none'
	},
	title: {
		flexGrow: 1
	},
	drawerPaper: {
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	drawerPaperClose: {
		overflowX: 'hidden',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		width: theme.spacing(7),
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9)
		}
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
		// content which is class of main needs to be flex and column direction
		display: 'flex',
		flexDirection: 'column',
		flexGrow: 1,
		height: '100vh',
		overflow: 'auto'
	},
	container: {
		paddingTop: theme.spacing(4)
	},
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column'
	},
	fixedHeight: {
		height: 500
	},
	// added the footer class
	footer: {
		padding: theme.spacing(2),
		marginTop: 'auto',
		backgroundColor: 'white',
		// just this item, push to bottom
		alignSelf: 'flex-end'
	}
}));

export default function SchoolDashboard() {
	const classes = useStyles();
	const [ error, setError ] = useState('');
	const [ schoolRequests, setSchoolRequests ] = useState([
		'Request for Chairs',
		'Funding Aid',
		'Educational Content'
	]);
	const [ schoolRequestsDesc, setSchoolRequestsDesc ] = useState([
		'Requesing for chairs - 4/07/2021',
		'Funding Aid required - 8/07/2021',
		'Educational Content - 9/07/2021'
	]);
	const [ schoolRequest, setSchoolRequest ] = useState('');
	const [ inputTime, setInputTime ] = useState('');

	const [ open, setOpen ] = React.useState(true);
	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(schoolRequest);
		console.log(inputTime);
		setSchoolRequests([ ...schoolRequests, schoolRequest ]);
		alert('Request Sent');
	};

	useEffect(
		() => {
			console.log('current events were updated');
		},
		[ schoolRequests ]
	);
	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="absolute"
				className={clsx(classes.appBar, open && classes.appBarShift)}
			>
				<Toolbar className={classes.toolbar}>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						className={clsx(
							classes.menuButton,
							open && classes.menuButtonHidden
						)}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						component="h1"
						variant="h6"
						color="inherit"
						noWrap
						className={classes.title}
					>
						Dashboard
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				classes={{
					paper: clsx(
						classes.drawerPaper,
						!open && classes.drawerPaperClose
					)
				}}
				open={open}
			>
				<div className={classes.toolbarIcon}>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<List>
					<div>
						<ListItem button component="a" href="/profile">
							<ListItemIcon>
								<AccountCircleIcon />
							</ListItemIcon>
							<ListItemText primary="Profile" />
						</ListItem>

						<ListItem button>
							<ListItemIcon>
								<ExitToAppIcon />
							</ListItemIcon>
							<ListItemText primary="LogOut" />
						</ListItem>
					</div>
				</List>
				<Divider />
			</Drawer>
			<main className={classes.content}>
				<div className={classes.appBarSpacer} />
				<Container maxWidth="lg" className={classes.container}>
					<Grid container spacing={3}>
						<Grid item xs={12} md={8} lg={5}>
							<Paper className={fixedHeightPaper}>
								<h1>Post a Request</h1>
								{/* FORM */}
								<form
									className="add-form"
									onSubmit={handleSubmit}
								>
									<div className="form-control">
										<label>Title</label>
										<input
											type="text"
											placeholder="Title"
											value={schoolRequest}
											onChange={(e) =>
												setSchoolRequest(
													e.target.value
												)}
										/>
									</div>
									<div className="form-control">
										<label>Request</label>
										<textarea
											type="text"
											placeholder="Add details for your request eg: date, requirements"
											value={inputTime}
											onChange={(e) =>
												setInputTime(e.target.value)}
										/>
									</div>

									<input
										className="btn btn-primary"
										type="submit"
										value="Submit Requests"
									/>
								</form>
							</Paper>
						</Grid>
						<Grid item xs={12} md={8} lg={5}>
							<Paper className={fixedHeightPaper}>
								<h1>Pending Requests</h1>
								{schoolRequests.map((item) => (
									<Grid
										item
										xs={12}
										sm={6}
										lg={12}
										justify="flex-start"
									>
										<h3>{item}</h3>
										<p>Resource Description0</p>
									</Grid>
								))}
							</Paper>
						</Grid>
					</Grid>
				</Container>
			</main>
			<ChatBot />
		</div>
	);
}
