import {useDispatch} from "react-redux";
import React, {useState} from "react";
import {createTask} from "./tasksSlice";
import {Box, Checkbox, IconButton, InputBase, makeStyles} from "@material-ui/core";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import EventIcon from '@material-ui/icons/Event';
import ErrorTwoToneIcon from '@material-ui/icons/ErrorTwoTone';
import {Skeleton} from "@material-ui/lab";
import {TaskTitle} from "./Task";

export default function TaskCreateForm(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [isDone, setIsDone] = useState(false);

    const handleOnCreate = (event) => {
        if (event.charCode === 13) {
            dispatch(createTask({title: event.target.value, done: isDone}));
            event.target.value = "";
        }
    }

    return (
        <Box className={classes.root}>
            <IconButton size="small">
                <DragIndicatorIcon color="disabled"/>
            </IconButton>
            <Checkbox onChange={(event) => {
                setIsDone(event.target.checked)
            }}/>
            <InputBase
                className={classes.input}
                placeholder="Create new task..."
                onKeyPress={handleOnCreate}
                inputProps={{style: {fontSize: 14}}}
            />

            {props.showControls ?
                <Box>
                    <IconButton size="small" color="primary" style={{'padding': '2px'}}>
                        <ErrorTwoToneIcon/>
                    </IconButton>
                    <IconButton size="small" color="primary" style={{'padding': '2px'}}>
                        <EventIcon/>
                    </IconButton>
                </Box>
                :
                <Box/>
            }
        </Box>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    priority: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    }
}));