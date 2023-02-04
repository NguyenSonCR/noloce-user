import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    song: null,
    isPlay: false,
    progress: 0,
    currentTime: 0,
    duration: '00:00',
    volume: 0.5,
    muted: false,
    seek: false,
    loop: false,
    random: false,
};

export const songSlice = createSlice({
    name: 'song',
    initialState,
    reducers: {
        loadSong: (state, action) => {
            state.song = action.payload;
        },
        play: (state) => {
            state.isPlay = true;
        },
        pause: (state) => {
            state.isPlay = false;
        },
        progress: (state, action) => {
            state.progress = action.payload;
        },
        duration: (state, action) => {
            state.duration = action.payload;
        },
        volume: (state, action) => {
            state.volume = action.payload;
        },
        muted: (state, action) => {
            state.muted = action.payload;
        },
        currentTime: (state, action) => {
            state.currentTime = action.payload;
        },
        seek: (state, action) => {
            state.seek = action.payload;
        },
        loop: (state, action) => {
            state.loop = action.payload;
        },
        random: (state, action) => {
            state.random = action.payload;
        },
    },
});

export const { play, pause, progress, loadSong, duration, volume, muted, currentTime, seek, loop, random } =
    songSlice.actions;

export default songSlice.reducer;
