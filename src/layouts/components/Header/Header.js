import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import images from '~/assets/img';
import config from '~/config';
import Search from '../Search';
import Menu from '~/components/Popper/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOut, faStore } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Header() {
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'Tài khoản',
            to: config.routes.profile,
        },
        {
            icon: <FontAwesomeIcon icon={faStore} />,
            title: 'Đơn hàng',
            to: config.routes.purchase,
        },
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Đăng xuất',
            separate: true,
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx(['grid', 'wide'])}>
                <div className={cx(['row'])}>
                    <div className={cx(['col', 'l-12'])}>
                        <div className={cx('header')}>
                            <div className={cx('logo')}>
                                <Link className={cx('logo-link')}>
                                    <img src={images.logo} alt="logo" className={cx('logo-img')}></img>
                                </Link>
                                <Link to={config.routes.home} className={cx('logo-text')}>
                                    Noloce
                                </Link>
                            </div>
                            <div className={cx('search')}>
                                <Search />
                            </div>
                            <div className={cx('action')}>
                                <div className={cx('notify')}></div>
                                <Menu items={userMenu}>
                                    <div className={cx('user')}>
                                        <img src={images.avatar} alt="user" className={cx('user-img')}></img>
                                        <span className={cx('user-name')}>Sơn nguyễn</span>
                                    </div>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
