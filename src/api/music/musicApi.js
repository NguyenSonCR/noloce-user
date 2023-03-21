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

    getArtist: (slug) => {
        const url = `/music/artist/${slug}`;
        return axiosJWT.get(url);
    },

    getNewRelease: () => {
        const url = `/music/newrelease`;
        return axiosJWT.get(url);
    },
    addSongLibrary: (item) => {
        const url = `/music/mymusic/library/add`;
        return axiosJWT.patch(url, item);
    },

    removeSongLibrary: (encodeId) => {
        const url = `/music/mymusic/library/remove`;
        return axiosJWT.patch(url, encodeId);
    },

    addPlaylist: (formData) => {
        const url = `/music/mymusic/playlist/new`;
        return axiosJWT.post(url, formData);
    },

    deletePlaylist: (slug) => {
        const url = `/music/mymusic/playlist/delete/${slug}`;
        return axiosJWT.delete(url);
    },

    addSongPlaylist: ({ song, playlistId }) => {
        const url = `/music/mymusic/playlist/${playlistId}/addsong`;
        return axiosJWT.patch(url, song);
    },

    getAllMyPlaylist: () => {
        const url = `/music/mymusic/playlist`;
        return axiosJWT.get(url);
    },

    getSingleMyPlaylist: (slug) => {
        const url = `music/mymusic/playlist/${slug}`;
        return axiosJWT.get(url);
    },
    deleteSongMyPlaylist: ({ song, slug }) => {
        const url = `/music/mymusic/playlist/${slug}/deletesong`;
        return axiosJWT.patch(url, song);
    },
};

export default musicApi;
