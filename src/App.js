import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts';

import { useSelector } from 'react-redux';
import Audio from '~/layouts/components/Audio';
import Playlist from '~/pages/musics/playlist/Playlist';

function App() {
    const songState = useSelector((state) => state.song);
    return (
        <Router>
            <div className="App">
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
                </Routes>
                {songState.song && <Audio />}
                {<Playlist />}
            </div>
        </Router>
    );
}

export default App;
