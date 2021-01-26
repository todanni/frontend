import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import {
    Avatar,
    Checkbox,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText,
    makeStyles
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import AssignmentTwoToneIcon from '@material-ui/icons/AssignmentTwoTone';
import List from "@material-ui/core/List";
import {useDispatch, useSelector} from "react-redux";
import {getAccounts, selectAccounts} from "../account/accountsSlice";
import {selectProjects} from "./projectsSlice";
import TaskCreateForm from "../tasks/TaskCreateForm";
import Divider from "@material-ui/core/Divider";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'

export default function ProjectCreateDialog(props) {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const projects = useSelector(selectProjects);

    const [selectedDate, setSelectedDate] = React.useState(Date.now());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog open={open || props.open} aria-labelledby="form-dialog-add-project">
            <Box display="flex" alignItems="center" flexDirection="column" m={3}>
                <Box display="flex" alignItems="flex-start" justifyContent="space-between">
                    <Avatar variant="square" className={classes.projectAvatar}>
                        <AssignmentTwoToneIcon/>
                    </Avatar>
                    <Box display="flex" flexDirection="column">
                    <TextField
                        required
                        id="outlined-required"
                        label="Project name"
                        defaultValue="New Project"
                    />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            disableToolbar
                            variant="inline"
                            format="MM/dd/yyyy"
                            margin="normal"
                            id="date-picker-inline"
                            label="Project deadline"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />
                    </MuiPickersUtilsProvider>
                    </Box>
                </Box>
                <TextField
                    id="filled-textarea"
                    label="Project description"
                    placeholder="Description"
                    multiline
                    variant="filled"
                    rows={4}
                    fullWidth
                    style={{'margin': '10px'}}
                />
                <Typography style={{'marginTop': '20px', 'marginBottom':'10px'}}>
                    Create tasks
                </Typography>
                <TaskCreateForm showControls={false}/>
                <Divider style={{'width':'100%'}}/>
                <Typography style={{'marginTop': '20px'}}>
                    Add Members
                </Typography>
                <ProjectMembersDialog members={projects[0].members}/>
                <Box display="flex" justifyContent="flex-end" style={{'width':'100%'}}>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} variant="contained" color="secondary">
                        Create
                    </Button>
                </Box>
            </Box>
        </Dialog>
    );
}

function ProjectMembersDialog(props) {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch((getUsersAsync()))
    }, [dispatch])

    const users = [];

    return (
        <List dense className={classes.root}>
            {users.map((member, index) => {
                const labelId = `checkbox-list-secondary-label-${member.id}`;
                return (
                    <ListItem key={member} button>
                        <ListItemAvatar>
                            <Avatar
                                key={index}
                                alt={member.firstName}
                                src={member.profilePicture}
                            />
                        </ListItemAvatar>
                        <ListItemText id={labelId} primary={member.firstName + ' ' + member.lastName}/>
                        <ListItemSecondaryAction>
                            <Checkbox
                                edge="end"
                                // onChange={handleToggle(value)}
                                // checked={checked.indexOf(value) !== -1}
                                inputProps={{'aria-labelledby': labelId}}
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    );
}

const useStyles = makeStyles((theme) => ({
    projectAvatar: {
        color: '#fff',
        backgroundColor: theme.palette.primary.main,
        width: '120px',
        height: '120px',
        marginRight: '20px'
    },
    root: {
        width: '100%',
    },
    addProjectDialog: {
        width: '25%',
        height: '25%',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
}));