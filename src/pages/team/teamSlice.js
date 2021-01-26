import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialTeamMember = {id: "1", status: "Accepted", userID: 1};

export const teamSlice = createSlice({
    name: 'team',
    initialState: {
        team: [initialTeamMember],
        friendRequests: [],
        loading: true
    },
    reducers: {
        getTeam: (state, action) => {
            state.team = action.payload;
            return state;
        },
    },
});

export const selectTeam = state => state.team.team;

export const {getTeam} = teamSlice.actions;

export const getTeamAsync = () => async (dispatch) => {
    const response = await axios.get(`/api/team`);
    console.log("Received the following:");
    const team = response.data.team;
    console.log(team)
    dispatch(getTeam(team));
};

export default teamSlice.reducer;