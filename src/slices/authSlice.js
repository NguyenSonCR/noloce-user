import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isAuthenticated: false,
    isLoading: true,
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
            const newLibrary = [...state.user.music.library, action.payload];
            state.user = {
                ...state.user,
                music: {
                    ...state.user.music,
                    library: newLibrary,
                },
            };
        },
        removeSongLibrary: (state, action) => {
            const newLibrary = state.user.music.library.filter((item) => item.encodeId !== action.payload);
            state.user = {
                ...state.user,
                music: {
                    ...state.user.music,
                    library: newLibrary,
                },
            };
        },
    },
});

export const { setAuth, logoutUser, addSongLibrary, removeSongLibrary } = authSlice.actions;

export default authSlice.reducer;
