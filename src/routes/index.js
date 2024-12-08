import Search from '~/pages/Search';
import config from '~/config';
import { HeaderOnly } from '~/layouts';
import Website from '~/pages/websites/Website';
import Register from '~/pages/Register';
import Login from '~/pages/Login';
import Procedure from '~/pages/websites/Procedure';
import Price from '~/pages/websites/Price';
import Demo from '~/pages/websites/Demo';
import Introduce from '~/pages/websites/Introduce';
import Profile from '~/pages/Profile';

const publicRoutes = [
    // general
    { path: config.routes.home, component: Website },

    // website
    { path: config.routes.website, component: Website },
    { path: config.routes.procedure, component: Procedure },
    { path: config.routes.price, component: Price },
    { path: config.routes.demo, component: Demo },
    { path: config.routes.introduce, component: Introduce },
];

const privateRoutes = [{ path: config.routes.profile, component: Profile }];

const nullLayoutRoutes = [
    { path: config.routes.register, component: Register, layout: null },
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.search, component: Search, layout: HeaderOnly },
];
export { publicRoutes, privateRoutes, nullLayoutRoutes };
