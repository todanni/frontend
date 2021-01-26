import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {Avatar} from "@material-ui/core";
import useStyles from './styles';
import {Redirect, Route} from 'react-router-dom';
import NavigationItems from "./NavigationItems";
import ProjectsBoard from "../pages/projects/ProjectsBoard";
import TasksBoard from "../pages/tasks/TasksBoard";
import NotificationsBoard from "../pages/notifications/NotificationsBoard";
import PlanningBoard from "../pages/planning/PlanningBoard";
import TeamBoard from "../pages/team/TeamBoard";
import ActivityBoard from "../pages/activity";
import AccountDialog from "../pages/account/AccountDialog";

export default function Dashboard(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [openAccountDialog, setOpenAccountDialog] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar
                position="absolute"
                className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <img src="https://i.ibb.co/3fPnz9k/white-logo-transparent-background.png"
                         alt="white-logo-transparent-background" className={classes.logo}/>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>

                    </Typography>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                        onClick={() => {setOpenAccountDialog(true)}}
                    >
                        <Avatar src='https://i.imgur.com/yR5Zwmo.png' />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}>
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </div>
                <Divider/>
                <NavigationItems/>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <Container className={classes.container} style={{'height': '100%', 'backgroundColour':'                     '}}>
                    <Route exact path="/"><Redirect to="/tasks"/> </Route>
                    <Route exact path="/tasks" component={TasksBoard}/>
                    <Route exact path="/projects" component={ProjectsBoard}/>
                    <Route exact path="/planning" component={PlanningBoard}/>
                    <Route exact path="/activity" component={ActivityBoard}/>
                    <Route exact path="/teams" component={TeamBoard}/>
                    <Route exact path="/notifications" component={NotificationsBoard}/>
                </Container>
                <AccountDialog open={openAccountDialog}/>
            </main>
        </div>
    );
}