import {Avatar, Button, Dialog, DialogContent, TextField} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import React from "react";
import Box from "@material-ui/core/Box";


export default function AccountDialog(props) {
    const classes = useStyles();

    return (
        <Dialog open={props.open}>
            <DialogContent className={classes.dialog}>
                <form className={classes.root}>
                    <Box className={classes.avatarBox}>
                        <Avatar src="https://i.imgur.com/0ID9Knn.png" className={classes.profilePicture}/>
                    </Box>
                    <Box className={classes.fieldBox}>
                        <TextField
                            required
                            id="first-name"
                            label="First Name"
                            defaultValue="Ashley"
                            variant="outlined"
                            autoComplete="first-name"
                        />
                        <TextField
                            required
                            id="last-name"
                            label="Last Name"
                            defaultValue="Williams"
                            variant="outlined"
                            autoComplete="last-name"
                        />
                    </Box>
                    <Box className={classes.fieldBox}>
                        <TextField
                            required
                            id="email"
                            label="Email"
                            defaultValue="asriwi@gmail.com"
                            variant="outlined"
                            autoComplete="email"
                        />
                        <TextField
                            id="role"
                            label="Role"
                            defaultValue="CTO"
                            variant="outlined"
                            autoComplete="role"
                        />
                    </Box>
                    <Box className={classes.fieldBox}>
                        <TextField
                            required
                            id="filled-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                        />
                        <TextField
                            required
                            id="confirm-password-input"
                            label="Confirm Password"
                            type="password"
                            autoComplete="confirm-password"
                            variant="outlined"
                        />
                    </Box>
                    <Box className={classes.buttonsBox}>

                        <Button variant="contained" color="secondary" className={classes.saveButton}>
                            Save
                        </Button>
                        <Button variant="outlined" color="primary" className={classes.saveButton}>
                            Cancel
                        </Button>
                    </Box>
                </form>
            </DialogContent>
        </Dialog>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            backgroundColor: '#fff'
        },
    },
    saveButton: {
        marginRight: theme.spacing(1),
        width: '106px'
    },
    profilePicture: {
        width: '200px',
        height: '200px',
        // margin: theme.spacing(2),
    },
    dialog: {
        display: 'flex',
        direction: 'column',
        backgroundColor: '#f6f6f6',
    },
    fieldBox: {
        display: 'flex',
        direction: 'row',

    },
    avatarBox: {
        display: 'flex',
        direction: 'column',
        justifyContent: 'center',
        marginBottom: '10px',

    },
    buttonsBox: {
        display: 'flex',
        direction: 'column',
        justifyContent: 'flex-end',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
}));