import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const accountsSlice = createSlice({
    name: 'accounts',
    initialState: {
        accounts: [],
        loading: true
    },
    reducers: {
        setAccounts: (state, action) => {
            state.accounts = action.payload;
            return state;
        },
        editAccountDetails: (state, action) => {
            state.accounts = action.payload;
            return state;
        },
        addAccount: (state, action) => {
            const afterFilter = state.accounts.filter(account => account.id === action.payload.id);
            if (afterFilter.length === 0) {
                state.accounts.push(action.payload)
            }
        },
    }
})

// Select all users
export const selectAccounts = state => state.accounts.accounts;

export const {setAccounts, editAccountDetails, addAccount} = accountsSlice.actions;

export const getAccounts = (ids) => async (dispatch) => {
    const requestURL = '/api/accounts?' + ids.map(id => `id=${id}`).join('&');
    console.log(requestURL)
    const response = await axios.get(requestURL);
    const accountsDetails = response.data.accounts;
    dispatch(setAccounts(accountsDetails));
}

// export const getAccountDetails = (id) => async (dispatch) => {
//     const response = await axios.get(`/api/accounts/${id}`);
//     const accountDetails = response.data.account;
//     dispatch(addAccount(accountDetails));
// }
//
// export const getSingleAccount = id => {
//     return createSelector(
//         [selectAccounts], accounts => {
//             console.log(accounts)
//             console.log(id)
//             return accounts.filter(account => account.id === id)
//         }
//     )
// }

export default accountsSlice.reducer;