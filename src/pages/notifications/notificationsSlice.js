import {createSlice} from '@reduxjs/toolkit';
import axios from "axios";

export const notificationsSlice = createSlice({
    name: 'notifications',
    initialState: {
        notifications: [],
        loading: true
    },
    reducers: {
        fetchNotifications: (state, action) => {
            state.notifications = action.payload;
            return state;
        },
        toggleLoading: (state) => {
            state.loading = !state.loading;
            return state;
        }
    },
})


export const {fetchNotifications, toggleLoading,} = notificationsSlice.actions;

// Selector for all notifications
export const selectNotifications = state => state.notifications.notifications;

// Selector for UI loading
export const selectIsLoading = state => state.notifications.loading;

// API call to list todos
export const getNotifications = () => async (dispatch) => {
    dispatch(toggleLoading());
    const response = await axios.get(`/api/notifications`);
    const notifications = response.data.notifications;
    dispatch(fetchNotifications(notifications));
    dispatch(toggleLoading());
}


export default notificationsSlice.reducer;


