import React, {useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import {Box, Button, makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export default function Verify(props) {
    const classes = useStyles();

    useEffect(() => {
        // send verify request using the code
    }, [])

    return (
        <div className={classes.root}>
            <Paper elevation={3}>
                <Box className={classes.contents}>
                    <img src='https://i.imgur.com/vsTeS8B.png' alt='' width='400px' height='123px'/>
                    <Typography variant='h6'>
                        Account Email Address Verified!
                    </Typography>
                    <Typography variant='subtitle2'>
                        Your account is successfully confirmed! You can now log in using your credentials.
                    </Typography>
                    <Button variant='contained' color='secondary'> Login </Button>
                </Box>
            </Paper>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        '& > *': {
            margin: theme.spacing(4),
            width: "80%",
            height: "400px",
        },
    },
    contents: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}))
