import React, { useEffect, useRef } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import {
	makeStyles,
	AppBar,
	Box,
	Drawer,
	Grid,
	List,
	Slide,
	useScrollTrigger,
	Hidden,
	Toolbar,
	Typography,
	MenuItem,
	withStyles,
} from "@material-ui/core";
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from "@material-ui/icons/Menu";
import ClearIcon from "@material-ui/icons/Clear";




const useStyles = makeStyles((theme) => ({
	navbarContainer: {
		visibility: "hidden",
		height: "85px",
		[theme.breakpoints.down("xs")]: {
			height: "77px",
		},
	},
	sectionDesktop: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex",
		},
	},
	sectionMobile: {
		display: "flex",
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
	drawerItems: {
		width: "100vw",
	},
	menuItem: {
		margin: "1rem",
		width: "auto",
		display: "flex",
		justifyContent: "center",
	},
	iconContainer: {
		width: "100%",
		borderBottom: "1px #5e5e5e solid",
		justifyContent: "flex-end",
	},
	closeIcon: {
		fontSize: "35px",
		margin: "20px",
		cursor: "pointer",
	},
	drawerItem: {
		fontWeight: "600",
		marginLeft: "10px",
		verticalAlign: "middle",
		transform: "perspective(1px) translateZ(0)",
		position: "relative",
		overflow: "hidden",

		[theme.breakpoints.down("sm")]: {
			fontSize: "49px",
			marginLeft: "0px",
		},

		"&:before": {
			content: '""',
			position: "absolute",
			zIndex: -1,
			left: 0,
			right: "100%",
			bottom: 0,
			background: "#F23A3A",
			height: "2px",
			transition: ".5s cubic-bezier(.32,.94,.6,1) right",
		},
		"&:hover:before": {
			right: 0,
		},
	},
	drawerItemReg: {
		fontWeight: "600",
		marginLeft: "10px",
		verticalAlign: "middle",
		transform: "perspective(1px) translateZ(0)",
		position: "relative",
		overflow: "hidden",
		border: "1px solid #F23A3A",
		padding: "10px 20px",
		color: "#F23A3A",
		transition: ".3s ease-out",
		"&:hover": {
			background: "#F23A3A",
			color: "#ffffff",
		},

		[theme.breakpoints.down("sm")]: {
			fontSize: "49px",
			marginLeft: "0px",
		},
	},
	appbar: {
		color: "black",
		backgroundColor: "white",
		position: "fixed",
		top: 0,
		padding: "10px",
		borderBottom: "1px solid #e1e1e1",
	},
	hide: {
		display: 'none',
	},
}));


function Header(props) {
	const {
		location: { pathname },
	} = props;
	const classes = useStyles();


	const [mobileOpen, setMobileOpen] = React.useState(false);
	const history = useHistory();
	const toggleDrawer = () => {
		setMobileOpen(!open);
	};

	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};



	function HideOnScroll(props) {
		const { children, window } = props;
		const trigger = useScrollTrigger({
			target: window ? window() : undefined,
		});
		return (
			<Slide appear={false} direction="down" in={!trigger}>
				{children}
			</Slide>
		);
	}

	return (
		<Box>
			<HideOnScroll>
				<AppBar
					color="transparent"
					elevation={0}
					className={classes.appbar}

				>
					<Toolbar>
						<Hidden mdUp>
							<Grid
								container
								direction="row"
								justify="space-between"
								alignItems="center"
							>
								<Link to="/">
									<img
										
										style={{ height: "50px", cursor: "pointer" }}
										alt="nav-logo"
									/>
								</Link>

							</Grid>
						</Hidden>
						<Hidden smDown>
							<Link to="/">
								
							</Link>
							<Grid
								container
								direction="row"
								justify="flex-end"
								alignItems="center"
							>

							</Grid>
						</Hidden>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="end"
							onClick={handleDrawerOpen}
							className={clsx(open && classes.hide)}
						>
							<MenuIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Drawer
				anchor="left"
				variant="temporary"
				open={open}

			>
				<Grid container className={classes.iconContainer}>
					<ClearIcon
						className={classes.closeIcon}
						onClick={handleDrawerClose}
					/>
				</Grid>
				<List selected={true} className={classes.drawerItems}>
					
				</List>
			</Drawer>
		</Box>
	);
}


export default withRouter(Header);