import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isAuthenticated: false,
    isLoading: true,
    formShow: 'icon',
    scrolling: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.user = action.payload.user;
            state.isAuthenticated = action.payload.isAuthenticated;
            state.isLoading = false;
        },
        logoutUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.isLoading = false;
        },

        addMessage: (state, action) => {
            state.user = {
                ...state.user,
                message: [...state.user.message, action.payload],
            };
        },

        updatedUser: (state, action) => {
            state.user = action.payload;
        },

        setFormShow: (state, action) => {
            state.formShow = action.payload;
        },
    },
});

export const { setAuth, logoutUser, addMessage, updatedUser, setFormShow } = authSlice.actions;

export default authSlice.reducer;
