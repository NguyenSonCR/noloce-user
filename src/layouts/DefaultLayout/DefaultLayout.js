import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { useDispatch } from 'react-redux';
import { setPopup } from '~/slices/songSlice';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const dispatch = useDispatch();
    const handleClosePopup = () => {
        dispatch(setPopup(false));
    };
    return (
        <div className={cx('wrapper')} onClick={handleClosePopup}>
            <Header />
            <div className={cx('container')}>
                <div className={cx(['grid', 'wide'])}>
                    <div className={cx(['row'])}>
                        <div className={cx('col', 'l-2')}>
                            <Sidebar />
                        </div>
                        <div className={cx('col', 'l-10')}>
                            <div className={cx('content')}>{children}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
