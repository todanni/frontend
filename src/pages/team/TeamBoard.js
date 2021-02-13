import React from 'react';
import {Button, Grid, makeStyles} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

const team = [
    {id: 1, status: "Accepted", userID: 1}, // User is a part of team
    {id: 2, status: "Invited", userID: 2},  // User has been invited to join the team
    {id: 3, status: "Pending", userID: 3}   // User has invited you to join their team
];

export default function TeamBoard(props) {
    const classes = useStyles();

    return (
        <Box>
            <Grid container direction="column" justify="space-between" alignItems="stretch">
                <Box className={classes.topControls}>
                    <Typography>
                        Team members
                    </Typography>
                    <Button
                        size="small"
                        variant='contained'
                        color='secondary'
                        className={classes.button}
                        disabled
                        startIcon={<EmailTwoToneIcon/>}>Invite</Button>
                </Box>
                <Divider style={{'width': '100%'}}/>
                {
                    team.map(teamMember => {
                        return <TeamMember key={teamMember.id} member={teamMember}/>
                    })
                }
                <Divider style={{'width': '100%'}}/>
            </Grid>
        </Box>
    );
}

function TeamMember(props) {
    const classes = useStyles();

    return (
        <Box p={1} className={classes.teamMember}>
            <Box display="flex" alignItems="center" justifyContent="flex-start" style={{'flex': '1'}}>
                <Avatar variant="square" className={classes.avatar}/>
                <Box display="flex" style={{'flexDirection': 'column'}}>
                    <Typography> Ashley Williams </Typography>
                </Box>
            </Box>
            <Box display="flex" alignItems="center" style={{'flex': '1'}}>

            </Box>
            <Box display="flex" alignItems="center" style={{'flex': '1'}}>
                <IconButton size="small">
                    <CheckCircleIcon color="secondary"/>
                </IconButton>
                <IconButton size="small">
                    <CancelIcon color="primary"/>
                </IconButton>
            </Box>
        </Box>
    );
}

const useStyles = makeStyles((theme) => ({
    topControls: {
        paddingTop: '10px',
        paddingBottom: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        paddingRight: 10,
    },
    avatar: {
        backgroundColor: theme.palette.primary.main,
        marginRight: '20px',
        width: '50px',
        height: '50px'
    },
    teamMember: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
}));