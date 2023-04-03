import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts';

import { useSelector } from 'react-redux';
import Audio from '~/layouts/components/Audio';
import Playlist from '~/pages/musics/playlist/Playlist';
import Toast from './layouts/components/Toast';
import ProtectedRoute from '~/routing/ProtectedRoute';
import useViewport from './hooks/useViewport';
import AudioMobile from './layouts/components/AudioMobile';

function App() {
    const songState = useSelector((state) => state.song);
    const viewPort = useViewport();
    const isMobile = viewPort.width < 740;
    var container = document.querySelector('#container');

    return (
        <Router>
            <div className="app" id="container">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        if (route.layout === null) {
                            Layout = Fragment;
                        } else if (route.layout) {
                            Layout = route.layout;
                        }
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                    {privateRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        if (route.layout === null) {
                            Layout = Fragment;
                        } else if (route.layout) {
                            Layout = route.layout;
                        }
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <ProtectedRoute>
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    </ProtectedRoute>
                                }
                            ></Route>
                        );
                    })}
                </Routes>

                {songState.song && !isMobile && <Audio container={container} />}
                {songState.song && isMobile && <AudioMobile container={container} />}
                {<Playlist />}
                <Toast />
            </div>
        </Router>
    );
}

export default App;
