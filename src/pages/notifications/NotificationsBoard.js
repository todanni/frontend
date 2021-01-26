import React, {useEffect} from 'react';
import Box from "@material-ui/core/Box";
import {List, makeStyles} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import AlarmTwoToneIcon from '@material-ui/icons/AlarmTwoTone';
import SupervisorAccountTwoToneIcon from '@material-ui/icons/SupervisorAccountTwoTone';
import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';
import ReplyTwoToneIcon from '@material-ui/icons/ReplyTwoTone';
import Button from "@material-ui/core/Button";
import {timeAgo} from "../../utils/time";
import {getNotifications, selectNotifications} from "./notificationsSlice";
import {useDispatch, useSelector} from "react-redux";

export default function NotificationsBoard(props) {
    const dispatch = useDispatch();
    const notifications = useSelector(selectNotifications);

    useEffect(() => {
        dispatch(getNotifications());
    }, [dispatch])

    return (
        <Box pt={2}>
            <Grid container direction="row" justify="flex-end" alignItems="stretch">
                <Button variant="contained" color="secondary" size="small">
                    Clear
                </Button>
            </Grid>
            <List>
                {notifications.map((notification) => (
                    <ListItem component={Notification} divider={true} notification={notification}/>
                ))}
            </List>
        </Box>
    );
}

function Notification(props) {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Grid item>
                {switchNotificationsIcon(props.notification.type)}
            </Grid>
            <Grid item xs={6}>
                {props.notification.message}
            </Grid>
            <Grid item xs={4}>
                {timeAgo(props.notification.createdAt)}
            </Grid>
            <Grid item>
                <VisibilityTwoToneIcon color="disabled"/>
            </Grid>
        </Box>
    );
}

function switchNotificationsIcon(type) {
    switch (type) {
        case "assignment":
            return <AccountCircleTwoToneIcon fontSize="small"/>
        case "deadline":
            return <AlarmTwoToneIcon fontSize="small"/>
        case "completion":
            return <CheckCircleTwoToneIcon fontSize="small" color="secondary"/>
        case "request":
            return <SupervisorAccountTwoToneIcon fontSize="small" color="secondary"/>
        default:
            return <ReplyTwoToneIcon fontSize="small"/>
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        height: '46px',
        justifyContent: 'space-between',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    labelGrid: {
        display: "grid",
        padding: theme.spacing(0.5),
    },
    labelContainer: {
        display: 'inline-block',
        width: '12px',
        overflow: 'visible',
    },
}));