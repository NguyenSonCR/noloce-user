import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    song: null,
    songLyric: [],
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
    genres: null,
    genresDetail: null,
    lyricPage: false,
};

export const songSlice = createSlice({
    name: 'song',
    initialState,
    reducers: {
        loadSong: (state, action) => {
            state.song = action.payload;
            state.mounted = true;
        },
        setSongLyric: (state, action) => {
            state.songLyric = action.payload;
        },
        setLyricPage: (state, action) => {
            state.lyricPage = action.payload;
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

        setTop100: (state, action) => {
            state.top100 = action.payload;
        },
        setAlbum: (state, action) => {
            state.album = action.payload;
        },
        setSearchResult: (state, action) => {
            state.searchResult = action.payload;
        },
        setPlaylist: (state, action) => {
            state.playlist = action.payload;
        },

        setHomeMusic: (state, action) => {
            state.homeMusic = action.payload;
        },
        setGenres: (state, action) => {
            state.genres = action.payload;
        },
        setGenresDetail: (state, action) => {
            state.genresDetail = action.payload;
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
    setTop100,
    setAlbum,
    setSearchResult,
    setPlaylist,
    setHomeMusic,
    setSongLyric,
    setGenres,
    setGenresDetail,
    setLyricPage,
} = songSlice.actions;

export default songSlice.reducer;
