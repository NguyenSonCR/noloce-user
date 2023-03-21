import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import images from '~/assets/img';
import config from '~/config';
import Search from '../Search';
import Menu from '~/components/Popper/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOut, faStore } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import authApi from '~/api/auth/auth';
import { setAuth } from '~/slices/authSlice';
import { LOCAL_STORAGE_TOKEN_NAME } from '~/api/constants';

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
            code: 'logout',
        },
    ];

    const dispatch = useDispatch();
    useEffect(() => {
        authApi
            .loadUser()
            .then((data) => {
                if (data.success) {
                    dispatch(setAuth({ user: data.user, isAuthenticated: true }));
                }
            })
            .catch((error) => {
                localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
                dispatch(setAuth({ user: null, isAuthenticated: false }));
                console.log(error);
            });
        // eslint-disable-next-line
    }, []);

    const userState = useSelector((state) => state.auth);

    return (
        <div className={cx('wrapper')}>
            <div className={cx(['grid', 'wide'])}>
                <div className={cx(['row'])}>
                    <div className={cx(['col', 'l-12'])}>
                        <div className={cx('header')}>
                            <div className={cx('logo')}>
                                <Link className={cx('logo-link')} to={config.routes.home}>
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
                                {userState.isAuthenticated ? (
                                    <Menu items={userMenu}>
                                        <div className={cx('user')}>
                                            <img src={images.avatar} alt="user" className={cx('user-img')}></img>
                                            <span className={cx('user-name')}>{userState.user.username}</span>
                                        </div>
                                    </Menu>
                                ) : (
                                    <div className={cx('authentication')}>
                                        <Link to={config.routes.register} className={cx('register')}>
                                            Đăng ký
                                        </Link>
                                        <Link to={config.routes.login}>Đăng nhập</Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
