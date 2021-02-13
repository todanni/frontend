import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../pages/tasks/tasksSlice';
import projectsReducer from '../pages/projects/projectsSlice';
import accountsReducer from '../pages/account/accountsSlice';
import notificationsReducer from '../pages/notifications/notificationsSlice';
import teamReducer from '../pages/team/teamSlice';

export default configureStore({
  reducer: {
    tasks: tasksReducer,
    projects: projectsReducer,
    accounts: accountsReducer,
    notifications: notificationsReducer,
    team: teamReducer,
  },
});
