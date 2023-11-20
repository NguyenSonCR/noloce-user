import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { useDispatch } from 'react-redux';
import useViewport from '~/hooks/useViewport';
import NaviMobi from '~/layouts/components/NaviMobi';
import Footer from '~/layouts/components/Footer';
import { Outlet } from 'react-router-dom';
import ChatBot from '~/layouts/components/ChatBot';
import { socket } from '~/socket';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function DefaultLayout() {
    const dispatch = useDispatch();
    const viewPort = useViewport();
    const isMobile = viewPort.width < 740;

    const handleClosePopup = () => {
        // dispatch(setPopup(false));
    };

    const [isConnected, setIsConnected] = useState(socket.connected);

    useEffect(() => {
        function onConnect() {
            setIsConnected(true);
        }

        function onDisconnect() {
            setIsConnected(false);
        }
        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);

        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
        };
    }, []);

    let body = null;
    if (isMobile) {
        body = (
            <div className={cx('mobile')}>
                <div className={cx('wrapper')} onClick={handleClosePopup}>
                    <Header />
                    <div className={cx('container')}>
                        <div className={cx(['grid'])}>
                            <div className={cx('content')}>
                                <Outlet />
                            </div>
                        </div>
                    </div>
                    <NaviMobi />
                </div>
            </div>
        );
    }

    if (!isMobile) {
        body = (
            <div
                className={cx('wrapper')}
                onClick={() => {
                    handleClosePopup();
                }}
            >
                <Header />
                <div className={cx('container')}>
                    <div className={cx('sidebar')}>
                        <Sidebar />
                    </div>

                    <div className={cx('content')}>
                        <div className={cx(['grid'])}>
                            <Outlet />
                        </div>
                    </div>
                </div>
                <Footer />
                <ChatBot />
            </div>
        );
    }
    return body;
}

export default DefaultLayout;
