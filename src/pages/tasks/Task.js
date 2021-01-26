import React from "react";
import {AccordionDetails, Box, Checkbox, IconButton, InputBase, makeStyles, withStyles} from "@material-ui/core";
import MuiAccordion from '@material-ui/core/Accordion';
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import {useDispatch} from "react-redux";
import {updateTaskAsync} from "./tasksSlice";
import {Skeleton} from "@material-ui/lab";
import Typography from "@material-ui/core/Typography";

function Task(props) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const Accordion = withStyles({
        root: {
            boxShadow: 'none',
            '&:not(:last-child)': {
                borderBottom: 0,
            },
            '&:before': {
                display: 'none',
            },
            '&$expanded': {
                margin: 'auto',
            },
        },
        expanded: {},
    })(MuiAccordion);

    return (
        <Accordion expanded={false}>
            <Box className={classes.root}>
                <IconButton size="small">
                    <DragIndicatorIcon color="disabled"/>
                </IconButton>
                <Checkbox checked={props.task.done}
                          onClick={() => dispatch(updateTaskAsync({...props.task, done: !props.task.done}))}/>
                {props.loading ?
                    <TaskTitle task={props.task}/>
                    :
                    <Skeleton>
                        <TaskTitle task={props.task}/>
                    </Skeleton>}
                <Box style={{'paddingRight': '15px'}}>
                    {/*{ props.task.labels.map( label => {*/}
                    {/*    return (*/}
                    {/*        <Box className={classes.labelContainer}>*/}
                    {/*            <LocalOfferRoundedIcon color={label.colour}/>*/}
                    {/*        </Box>*/}
                    {/*    );*/}
                    {/*} ) }*/}
                </Box>
            </Box>
            <AccordionDetails>
                <Typography style={{'paddingLeft': '20px'}}>
                    This panel will include further details added for the tasks that you've created such as
                    description, date created, date modified, deadline, owner, project, labels, comments.
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}

function TaskTitle(props) {
    const classes = useStyles();

    return (
        <InputBase
            readOnly={true}
            className={classes.input}
            value={props.task.title}
            inputProps={{style: {fontSize: 14}}}
        />
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        height: '46px'
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

export {Task, TaskTitle};