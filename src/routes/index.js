import Home from '~/pages/Home';
import Music from '~/pages/Music';
import Cinema from '~/pages/Cinema';
import Search from '~/pages/Search';
import config from '~/config';
import { HeaderOnly } from '~/layouts';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.music, component: Music },
    { path: config.routes.cinema, component: Cinema },
    { path: config.routes.search, component: Search, layout: HeaderOnly },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
