import {createSelector, createSlice} from '@reduxjs/toolkit';
import axios from "axios";

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [
            {id: 0, title: 'Placeholder non-completed task', done: false},
            {id: 1, title: 'Placeholder completed task', done: true}
        ],
        loading: true
    },
    reducers: {
        fetchTasks: (state, action) => {
            state.tasks = action.payload;
            return state;
        },
        addTask: (state, action) => {
            state.tasks.push(action.payload);
            return state;
        },
        updateTask: (state, action) => {
            let completedTaskIndex = state.tasks.findIndex(task => task.id === action.payload.id);
            state.tasks[completedTaskIndex] = action.payload;
            return state;
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
            return state;
        },
        sortTasks: (state, action) => {
            state.tasks = state.tasks.sort((a, b) => {
                if (a[action.payload] < b[action.payload])
                    return -1;
                return 1;
            });
        },
        toggleLoading: (state) => {
            state.loading = !state.loading;
            return state;
        }
    },
})


export const {fetchTasks, toggleLoading, addTask, deleteTask, updateTask, sortTasks} = tasksSlice.actions;

// Selector for all tasks
export const selectTasks = state => state.tasks.tasks;

// Selector for all non-completed tasks
export const selectNonCompletedTasks = createSelector(
    [selectTasks], tasks => {
        return tasks.filter(task => task.done === false);
    }
);

// Selector for all completed tasks
export const selectCompletedTasks = createSelector(
    [selectTasks], tasks => {
        return tasks.filter(task => task.done === true);
    }
);

// Selector for UI loading
export const selectIsLoading = state => state.tasks.loading;

// API call to list todos
export const getTasks = () => async (dispatch) => {
    dispatch(toggleLoading());
    const response = await axios.get(`/api/tasks`);
    const tasks = response.data.tasks;
    dispatch(fetchTasks(tasks));
    dispatch(toggleLoading());
}

export const createTask = (task) => async (dispatch) => {
    const response = await axios.post(`/api/tasks`, task);
    const createdTask = response.data.task;
    dispatch(addTask(createdTask));
}

export const deleteTaskAsync = (task) => async (dispatch) => {
    await axios.delete(`/api/tasks/${task.id}`);
    dispatch(deleteTask(task.id));
}

export const updateTaskAsync = (task) => async (dispatch) => {
    const response = await axios.patch(`/api/tasks/${task.id}`, task);
    dispatch(updateTask(response.data.task));
}

export default tasksSlice.reducer;


