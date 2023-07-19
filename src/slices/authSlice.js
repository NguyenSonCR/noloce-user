import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isAuthenticated: false,
    isLoading: true,
    library: [],
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
        addSongLibrary: (state, action) => {
            const newLibrary = [...state.library, action.payload];
            state.library = newLibrary;
        },
        setLibrary: (state, action) => {
            state.library = action.payload;
        },

        removeSongLibrary: (state, action) => {
            const newLibrary = state.library.filter((item) => item.encodeId !== action.payload);
            state.library = newLibrary;
        },
    },
});

export const { setAuth, logoutUser, addSongLibrary, removeSongLibrary, setLibrary } = authSlice.actions;

export default authSlice.reducer;
