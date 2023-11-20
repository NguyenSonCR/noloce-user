import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes, nullLayoutRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts';
import Toast from './layouts/components/Toast';
import ProtectedRoute from '~/routing/ProtectedRoute';
import useViewport from './hooks/useViewport';

function App() {
    const viewPort = useViewport();
    const isMobile = viewPort.width < 740;

    return (
        <Router>
            <div className="app" id="container">
                <Routes>
                    <Route>
                        {nullLayoutRoutes.map((route, index) => {
                            let Layout = Fragment;
                            if (route.layout) {
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
                    </Route>

                    <Route element={<DefaultLayout />}>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            return <Route key={index} path={route.path} element={<Page />}></Route>;
                        })}

                        {privateRoutes.map((route, index) => {
                            const Page = route.component;
                            return (
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    element={
                                        <ProtectedRoute>
                                            <Page />
                                        </ProtectedRoute>
                                    }
                                ></Route>
                            );
                        })}
                    </Route>
                </Routes>
                <Toast />
            </div>
        </Router>
    );
}

export default App;
