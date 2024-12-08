import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes, nullLayoutRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts';
import Toast from './layouts/components/Toast';
import ProtectedRoute from '~/routing/ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import authApi from '~/api/auth/auth';
import { setAuth } from '~/slices/authSlice';
import { LOCAL_STORAGE_TOKEN_NAME } from '~/api/constants';
import ChatBot from '~/layouts/components/ChatBot';

function App() {
    const userState = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!userState.isAuthenticated) {
            authApi
                .loadUser()
                .then((data) => {
                    if (data.success) {
                        dispatch(setAuth({ user: data.user, isAuthenticated: true }));
                    }
                })
                .catch((error) => {
                    console.log(error);
                    localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
                    dispatch(setAuth({ user: null, isAuthenticated: false }));
                });
        }

        // eslint-disable-next-line
    }, []);

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
                <ChatBot />
            </div>
        </Router>
    );
}

export default App;
