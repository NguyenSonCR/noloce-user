import Home from '~/pages/Home';
import HomeMusic from '~/pages/HomeMusic';
import Cinema from '~/pages/Cinema';
import Search from '~/pages/Search';
import config from '~/config';
import { HeaderOnly } from '~/layouts';
import MyMusic from '~/pages/MyMusic';
import KindMusic from '~/pages/KindMusic';
import Website from '~/pages/Website';
import Economic from '~/pages/Economic';
import Register from '~/pages/Register';
import Login from '~/pages/Login';
import CinemaSearch from '~/pages/CinemaSearch';
import Details from '~/pages/Cinema/details';
import Top100 from '~/pages/musics/top100/Top100';
import Album from '~/pages/musics/album/Album';
import SearchMusic from '~/pages/musics/search/SearchMusic';

const publicRoutes = [
    // general
    { path: config.routes.home, component: Home },
    { path: config.routes.register, component: Register, layout: null },
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.search, component: Search, layout: HeaderOnly },
    // music
    { path: config.routes.music, component: HomeMusic },
    { path: config.routes.searchMusic, component: SearchMusic },
    { path: config.routes.myMusic, component: MyMusic },
    { path: config.routes.genresMusic, component: KindMusic },
    { path: config.routes.top100, component: Top100 },
    { path: config.routes.albumMusic, component: Album },

    // cinema
    { path: config.routes.cinema, component: Cinema },
    { path: config.routes.cinemaSearch, component: CinemaSearch },
    { path: config.routes.cinemaDetails, component: Details },

    // website
    { path: config.routes.website, component: Website },
    { path: config.routes.economic, component: Economic },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
