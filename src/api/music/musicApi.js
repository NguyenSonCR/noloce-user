import axiosJWT from '../setAxios';

const musicApi = {
    getTop100Zing: () => {
        const url = '/music/top100';
        return axiosJWT.get(url);
    },
    getAlbumZing: (id) => {
        const url = `/music/album/${id}`;
        return axiosJWT.get(url);
    },
    getSong: (id) => {
        const url = `/music/song/${id}`;
        return axiosJWT.get(url);
    },
    searchSong: (query) => {
        const url = `/music/search`;
        return axiosJWT.get(url, { params: { query } });
    },

    getHome: () => {
        const url = '/music';
        return axiosJWT.get(url);
    },

    getLyricSong: (id) => {
        const url = `/music/song/lyric/${id}`;
        return axiosJWT.get(url);
    },

    getGenres: () => {
        const url = `/music/genres`;
        return axiosJWT.get(url);
    },
    getGenreDetail: (id) => {
        const url = `/music/genres/${id}`;
        return axiosJWT.get(url);
    },
};

export default musicApi;
