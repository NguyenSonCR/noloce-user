import Home from '~/pages/Home';
import Music from '~/pages/Music';
import Cinema from '~/pages/Cinema';
import Search from '~/pages/Search';
import { HeaderOnly } from '~/components/Layout';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/music', component: Music },
    { path: '/cinema', component: Cinema, layout: null },
    { path: '/search', component: Search, layout: HeaderOnly },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
