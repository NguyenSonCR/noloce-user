import Home from '~/pages/Home';
import HomeMusic from '~/pages/HomeMusic';
import Cinema from '~/pages/Cinema';
import Search from '~/pages/Search';
import config from '~/config';
import { HeaderOnly } from '~/layouts';
import MyMusic from '~/pages/MyMusic';
import KindMusic from '~/pages/KindMusic';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.music, component: HomeMusic },
    { path: config.routes.myMusic, component: MyMusic },
    { path: config.routes.kindMusic, component: KindMusic },
    { path: config.routes.cinema, component: Cinema },
    { path: config.routes.search, component: Search, layout: HeaderOnly },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
