import {AvatarGroup} from "@material-ui/lab";
import {Avatar, Button, CircularProgress, Grid, IconButton, makeStyles} from "@material-ui/core";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProjectsAsync, selectProjects} from "./projectsSlice";
import {getAccounts, selectAccounts} from "../account/accountsSlice";
import Box from "@material-ui/core/Box";
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import StarTwoToneIcon from '@material-ui/icons/StarTwoTone';
import ProjectCreateDialog from "./ProjectCreateDialog";

export default function ProjectsBoard(props) {
    const dispatch = useDispatch();
    const projects = useSelector(selectProjects);
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        dispatch(getProjectsAsync());
    }, [dispatch])

    return (
        <Box>
            <ProjectCreateDialog open={open}/>
            <Grid container direction="column" justify="space-between" alignItems="stretch">
                <Box className={classes.topControls}>
                    <Button
                        size="small"
                        variant='outlined'
                        color='primary'
                        className={classes.button}
                        onClick={handleClickOpen}
                        startIcon={<AddTwoToneIcon/>}>Add project</Button>
                </Box>
                <Divider style={{'width': '100%'}}/>
                {projects.map(project => {
                    return (<Project project={project}/>);
                })}
            </Grid>
        </Box>
    );
}

function Project(props) {
    const classes = useStyles();

    return (
        <Box p={1} className={classes.project}>
            <Box display="flex" alignItems="center" justifyContent="flex-start" style={{'flex': '3'}}>
                <Avatar variant="square" src={props.project.logo} alt={props.project.title} className={classes.avatar}/>
                <Box display="flex" style={{'flexDirection':'column'}}>
                    <Typography>{props.project.title}</Typography>
                </Box>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-between" style={{'flex': '2'}}>
                <ProjectProgress progress={props.project.progress}/>
                <ProjectMembers members={props.project.members}/>
                <IconButton size="small">
                    <StarTwoToneIcon color="disabled"/>
                </IconButton>
            </Box>
        </Box>
    );
}

function ProjectMembers(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch((getAccounts()))
    }, [dispatch])

    const users = useSelector(selectAccounts).filter(user => props.members.includes(user.id));
    return (
        <div style={{'margin': '10px'}}>
            <AvatarGroup max={5}>
                {users.map((member, index) => {
                    return (
                        <Avatar
                            key={index}
                            alt={member.firstName}
                            src={member.profilePicture}
                        />);
                })}
            </AvatarGroup>
        </div>
    );
}

function ProjectProgress(props) {
    return (
        <Box position="relative" display="inline-flex">
            <CircularProgress variant="determinate" color="secondary" value={props.progress}/>
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography variant="caption" component="div" color="textSecondary">
                    {props.progress}%
                </Typography>
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
        justifyContent: 'flex-end',
        width: '100%',

    },
    project: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    button: {
        paddingRight: 10,
    },
    avatar: {
        // color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: theme.palette.primary.main,
        marginRight: '20px',
        width: '60px',
        height: '60px'
    },
}));