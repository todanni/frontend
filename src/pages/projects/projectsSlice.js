import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        projects: [
            {
                title: "Default project",
                creator: 1,
                description: "Some project description",
                createdAt: "2020-12-20T11:03:16.386273Z",
                modifiedAt: "2020-12-21T11:03:16.386273Z",
                members: [ 1, 2, 3 ],
                isDefault: true,
                logo: "default.png"
            }
        ],
        loading: true
    },
    reducers: {
        getProjects: (state, action) => {
            state.projects = action.payload;
            return state;
        },
        editProject: (state, action) => {
            state.projects = action.payload;
            return state;
        },
    },
});

export const selectProjects = state => state.projects.projects;

export const { getProjects, editProject} = projectsSlice.actions;

export const getProjectsAsync  = () => async (dispatch) => {
    const response = await axios.get(`/api/projects`);
    const projects = response.data.projects;
    dispatch(getProjects(projects));
};

export default projectsSlice.reducer;