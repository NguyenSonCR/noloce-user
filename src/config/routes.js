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
    top100: '/music/top100',
    albumMusic: '/music/album/:id',

    // cinema
    cinema: '/cinema',
    cinemaSearch: '/cinema/search/:query',
    cinemaDetails: 'cinema/movie/:id',

    // website
    website: '/website',
    economic: '/website/economic',
};
export default routes;
