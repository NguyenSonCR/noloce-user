const routes = {
    home: '/',
    search: '/search',
    login: '/login',
    register: '/register',

    // music
    music: '/music',
    searchMusic: '/music/search',
    myMusic: '/music/mymusic',
    genresMusic: '/music/genres',
    genresDetail: '/music/genres/:id',
    top100: '/music/top100',
    albumMusic: '/music/album/:id',
    artist: '/music/artist/:slug',
    newRelease: '/music/newrelease',
    myPlaylist: '/music/mymusic/playlist/:slug',

    // cinema
    cinema: '/cinema',
    cinemaSearch: '/cinema/search/:query',
    cinemaDetails: 'cinema/movie/:id',

    // website
    website: '/website',
    economic: '/website/economic',
};
export default routes;
