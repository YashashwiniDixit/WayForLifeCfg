import React, { useState } from 'react';
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
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import SimpleDialogDemo from './EventDialog';

const useStyles1 = makeStyles({
	root: {
		maxWidth: 800
	}
});

const ImgCard = () => {
	const classes = useStyles1();
	const history = useHistory();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					component="img"
					alt="Events"
					height="140"
					title="Events"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						Event
					</Typography>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
					/>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<a href="/viewevent">Learn More</a>
			</CardActions>
		</Card>
	);
};

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
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4)
	},
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column'
	},
	fixedHeight: {
		height: 240
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

export default function EventPage() {
	const classes = useStyles();
	const eventList = [
		{
			name: 'Creative Fest',
			logo:
				'https://www.google.com/imgres?imgurl=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D612758625508450&imgrefurl=https%3A%2F%2Fwww.facebook.com%2Fcreativefestivalcool%2F&tbnid=cqNo34Vl3-RB_M&vet=12ahUKEwi5osuX2tnxAhW1s0sFHftsATkQMygAegUIARCeAQ..i&docid=-IPHUUAYbXsTsM&w=720&h=720&q=creative%20fest&ved=2ahUKEwi5osuX2tnxAhW1s0sFHftsATkQMygAegUIARCeAQ'
		},
		{
			name: 'Teaching Assistance',
			logo: 'logo'
		},
		{
			name: 'Mental Health Workshop',
			logo: 'logo'
		},
		{
			name: 'Beach Clean Up Activity',
			logo: 'logo'
		},
		{
			name: 'Yoga Class',
			logo: 'logo'
		}
	];
	const [ open, setOpen ] = React.useState(true);
	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

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
						<ListItem button component="a" href="/events">
							<ListItemIcon>
								<EventIcon />
							</ListItemIcon>
							<ListItemText primary="Events" />
						</ListItem>
						<ListItem button component="a" href="/forum">
							<ListItemIcon>
								<ForumIcon />
							</ListItemIcon>
							<ListItemText primary="Forum" />
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
					<Typography varaint="h3" color="textSecondary">
						Event List
					</Typography>
					<SimpleDialogDemo />
					<Grid container spacing={3}>
						{eventList.map((item) => (
							<Grid
								item
								xs={12}
								sm={6}
								lg={12}
								justify="flex-start"
							>
								<ImgCard name={item.name} logo={item.logo} />
							</Grid>
						))}
					</Grid>
				</Container>
			</main>
		</div>
	);
}
