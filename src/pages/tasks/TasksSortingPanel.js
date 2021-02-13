import React from 'react';
import {Box, Button, Chip, makeStyles, MenuItem} from "@material-ui/core";
import SwapVertIcon from '@material-ui/icons/SwapVert';
import FilterListIcon from '@material-ui/icons/FilterList';
import {withStyles} from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ScheduleIcon from '@material-ui/icons/Schedule';
import EventIcon from '@material-ui/icons/Event';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';
import {useDispatch} from "react-redux";
import {sortTasks} from "./tasksSlice";

export default function TasksSortingPanel(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const StyledMenu = withStyles({
        paper: {
            border: '1px solid #d3d4d5',
        },
    })((props) => (
        <Menu
            elevation={0}
            getContentAnchorEl={null}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            {...props}
        />
    ));

    const StyledMenuItem = withStyles((theme) => ({
        root: {
            '&:focus': {
                backgroundColor: theme.palette.primary.main,
                '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                    color: theme.palette.common.white,
                },
            },
        },
    }))(MenuItem);

    return (
        <Box className={classes.root}>
            <Button
                size="small"
                className={classes.button}
                onClick={handleClick}
                startIcon={<SwapVertIcon/>}>Sort by</Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepmounted="true"
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <StyledMenuItem onClick={() => {
                    dispatch(sortTasks('id'));
                    handleClose();
                }}>
                    <ListItemIcon>
                        <EventIcon fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText primary="Date created"/>
                </StyledMenuItem>
                <StyledMenuItem onClick={() => {
                    dispatch(sortTasks('title'));
                    handleClose();
                }}>
                    <ListItemIcon>
                        <SortByAlphaIcon fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText primary="Alphabetically"/>
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemIcon>
                        <ScheduleIcon fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText primary="Deadline"/>
                </StyledMenuItem>
            </StyledMenu>
            <Button
                size="small"
                className={classes.button}
                startIcon={<FilterListIcon/>}>Filters</Button>
        </Box>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        // padding: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    button: {
        paddingRight: 10,
    }
}));