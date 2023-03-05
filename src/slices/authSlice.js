import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isAuthenticated: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logoutUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
    },
});

export const { setAuth, logoutUser } = authSlice.actions;

export default authSlice.reducer;
