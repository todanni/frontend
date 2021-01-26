import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';
import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';
import axios from "axios";
import {authMiddleWare} from "../../utils/auth";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

const activityURL = "/actions/";

export default function ActivityBoard(props) {
    const classes = useStyles();

    const [actions, setActions] = React.useState([]);

    useEffect(() => {
        authMiddleWare(props.history);
        const authToken = localStorage.getItem('AuthToken');
        axios.defaults.headers.common = {Authorization: `${authToken}`};
        axios
            .get(activityURL)
            .then((response) => {
                setActions(response.data)
            })
            .catch((err) => {
                if (err.response.status === 403) {
                    props.history.push('/login');
                    console.log();
                }
            });
    }, [props.history])

    return (
        <Timeline align="alternate">
            {actions.map((action, index) => (
                <Action action={action}/>
            ))}

            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        9:30 am
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot>
                        <FastfoodIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            Eat
                        </Typography>
                        <Typography>Because you need strength</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        10:00 am
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <LaptopMacIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            Code
                        </Typography>
                        <Typography>Because it&apos;s awesome!</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="primary" variant="outlined">
                        <HotelIcon/>
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail}/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            Sleep
                        </Typography>
                        <Typography>Because you need rest</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot color="secondary">
                        <RepeatIcon/>
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6" component="h1">
                            Repeat
                        </Typography>
                        <Typography>Because this is the life you love!</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>

        </Timeline>
    );
}

function Action(props) {
    const classes = useStyles();

    const pickActionIcon = (type) => {
        switch (type) {

            case "Creation":
                return (
                    <>
                        <TimelineDot >
                            <AddCircleTwoToneIcon/>
                        </TimelineDot>
                    </>
                );
            case "Assignment":
                return (
                    <>
                        <TimelineDot color="primary">
                            <AccountCircleTwoToneIcon/>
                        </TimelineDot>
                    </>
                );
            case "Completion":
                return (
                    <>
                        <TimelineDot color="secondary">
                            <CheckCircleTwoToneIcon/>
                        </TimelineDot>
                    </>
                )
        }
    };

    return (
        <TimelineItem>
            <TimelineOppositeContent>
                <Typography variant="body2" color="textSecondary">
                    {props.action.timestamp}
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                {pickActionIcon(props.action.type)}
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1">
                        {props.action.type}
                    </Typography>
                    <Typography>{props.action.task}</Typography>
                </Paper>
            </TimelineContent>
        </TimelineItem>
    );
}