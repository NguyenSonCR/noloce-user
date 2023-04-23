import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { useDispatch } from 'react-redux';
import { setPopup } from '~/slices/songSlice';
import useViewport from '~/hooks/useViewport';
import NaviMobi from '~/layouts/components/NaviMobi';
import Footer from '~/layouts/components/Footer';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const dispatch = useDispatch();
    const viewPort = useViewport();
    const isMobile = viewPort.width < 740;

    const handleClosePopup = () => {
        dispatch(setPopup(false));
    };
    let body = null;
    if (isMobile) {
        body = (
            <div className={cx('mobile')}>
                <div className={cx('wrapper')} onClick={handleClosePopup}>
                    <Header />
                    <div className={cx('container')}>
                        <div className={cx(['grid'])}>
                            <div className={cx('content')}>{children}</div>
                        </div>
                    </div>
                    <NaviMobi />
                </div>
            </div>
        );
    }

    if (!isMobile) {
        body = (
            <div className={cx('wrapper')} onClick={handleClosePopup}>
                <Header />
                <div className={cx('container')}>
                    <div className={cx(['grid', 'wide'])}>
                        <div className={cx(['row'])}>
                            <div className={cx('col', 'l-2', 'm-2')}>
                                <Sidebar />
                            </div>
                            <div className={cx('col', 'l-10', 'm-10')}>
                                <div className={cx('content')}>{children}</div>
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
