import React, {useEffect} from 'react';
import {Box, Divider, Grid} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {getTasks, selectCompletedTasks, selectIsLoading, selectNonCompletedTasks} from "./tasksSlice";
import {Task} from "./Task";
import TaskCreateForm from "./TaskCreateForm";
import TaskProjectPanel from "./TaskProjectPanel";
import TasksSortingPanel from "./TasksSortingPanel";

export default function TasksBoard(props) {
    const dispatch = useDispatch();
    const loading = useSelector(selectIsLoading);

    const tasks = useSelector(selectNonCompletedTasks);
    const completedTasks = useSelector(selectCompletedTasks);

    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch])

    return (
        <Box pt={2}>
            <Grid container direction="row" justify="space-between" alignItems="stretch">
                <TaskProjectPanel/>
                <TasksSortingPanel/>
            </Grid>
            <Divider/>
            <TaskCreateForm showControls={true}/>
            {tasks.map((task, index) =>
                (<Task key={task.id} task={task} index={index} loading={loading}/>))}
            <Divider/>
            {completedTasks.map((task, index) =>
                (<Task key={task.id} task={task} index={index} loading={loading}/>))}
        </Box>
    );
}
