import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import useViewport from '~/hooks/useViewport';
import NaviMobi from '~/layouts/components/NaviMobi';
import Footer from '~/layouts/components/Footer';
import { Outlet } from 'react-router-dom';

const cx = classNames.bind(styles);

function DefaultLayout() {
    const viewPort = useViewport();
    const isMobile = viewPort.width < 740;

    const handleClosePopup = () => {
        // dispatch(setPopup(false));
    };

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
                    <div className={cx(['grid'])}>
                        <div className={cx(['row', 'sm-gutter'])}>
                            <div className={cx(['col', 'l-1-5', 'm-2'], 'sidebar')}>
                                <Sidebar />
                            </div>

                            <div className={cx(['col', 'l-10-5', 'm-10'], 'content')}>
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
    return body;
}

export default DefaultLayout;
