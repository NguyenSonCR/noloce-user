import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    song: null,
    isPlay: false,
    volume: 0.5,
    muted: false,
    loop: false,
    random: false,
    mounted: false,
    top100: null,
    album: null,
    searchResult: null,
    playlist: false,
    homeMusic: null,
};

export const songSlice = createSlice({
    name: 'song',
    initialState,
    reducers: {
        loadSong: (state, action) => {
            return {
                ...state,
                song: action.payload,
                mounted: true,
            };
        },
        play: (state) => {
            state.isPlay = true;
        },
        pause: (state) => {
            state.isPlay = false;
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

        loop: (state, action) => {
            state.loop = action.payload;
        },
        random: (state, action) => {
            state.random = action.payload;
        },
        mounted: (state) => {
            state.mounted = false;
        },

        getTop100: (state, action) => {
            state.top100 = action.payload;
        },
        getAlbum: (state, action) => {
            state.album = action.payload;
        },
        getSearchResult: (state, action) => {
            state.searchResult = action.payload;
        },
        setPlaylist: (state, action) => {
            state.playlist = action.payload;
        },

        setHomeMusic: (state, action) => {
            state.homeMusic = action.payload;
        },
    },
});

export const {
    play,
    pause,
    loadSong,
    duration,
    volume,
    muted,
    loop,
    random,
    mounted,
    getTop100,
    getAlbum,
    getSearchResult,
    setPlaylist,
    setHomeMusic,
} = songSlice.actions;

export default songSlice.reducer;
