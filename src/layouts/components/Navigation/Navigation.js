import classNames from 'classnames/bind';
import styles from './Navigation.module.scss';
import config from '~/config';
import NavItem from './NavItem';
import Header from './Header';
import { ReactComponent as IconMusic } from '~/assets/icon/icons8-music.svg';
import { ReactComponent as IconKinds } from '~/assets/icon/kinds.svg';
import images from '~/assets/img';
import { useEffect, useState } from 'react';
import { setCode, setHistoryStore } from '~/slices/navigateSlice';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const cx = classNames.bind(styles);

function Navigation() {
    const NAV_MENU = [
        {
            icon: <IconMusic />,
            title: 'Music',
            code: 'music',
            to: config.routes.music,
            children: {
                title: 'Music',
                to: config.routes.music,
                data: [
                    {
                        icon: <img src={images.musicUser} alt=""></img>,
                        title: 'Cá nhân',
                        code: 'mymusic',
                        to: config.routes.myMusic,
                    },
                    {
                        icon: <img src={images.cd} alt=""></img>,
                        title: 'Khám phá',
                        code: 'home',
                        to: config.routes.music,
                    },
                    {
                        icon: <img src={images.star} alt=""></img>,
                        title: 'Top 100',
                        code: 'top',
                        to: config.routes.top100,
                    },
                    {
                        icon: <IconKinds />,
                        title: 'Thể loại',
                        code: 'genres',
                        to: config.routes.genresMusic,
                    },
                ],
            },
        },

        {
            icon: <img src={images.website} alt="" />,
            code: 'website',
            title: 'Website',
            to: config.routes.website,
            children: {
                to: config.routes.website,
                title: 'Website',
                data: [
                    {
                        title: 'Giới thiệu',
                        code: 'home',
                        to: config.routes.website,
                    },
                    {
                        title: 'Quy trình',
                        code: '',
                        to: config.routes.procedure,
                    },
                    {
                        title: 'Bảng giá',
                        code: 'price',
                        to: config.routes.price,
                    },

                    {
                        title: 'Demo',
                        code: 'demo',
                        to: config.routes.demo,
                    },
                ],
            },
        },
    ];
    const [history, setHistory] = useState([{ data: NAV_MENU }]);
    const [navItemActive, setNavItemActive] = useState('home');
    const current = history[history.length - 1];
    const navigateState = useSelector((state) => state.navigation);
    const { code } = navigateState;

    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const [condition, setCondition] = useState(false);

    useEffect(() => {
        current.data.forEach((item, index) => {
            if (item.code === 'music' && pathname.includes('/music')) {
                setHistory((prev) => [...prev, item.children]);
                dispatch(setCode(item.code));
                dispatch(setHistoryStore(1));
            } else if (item.code === 'website' && pathname.includes('/website')) {
                setHistory((prev) => [...prev, item.children]);
                dispatch(setCode(item.code));
                dispatch(setHistoryStore(1));
            } else if (navigateState.code === item.code) {
                setHistory((prev) => [...prev, item.children]);
            }

            if (item.code === pathname) {
                setHistory((prev) => [...prev, item.children]);
                dispatch(setHistoryStore(1));
            }
        });

        if (pathname === '/') {
            setHistory([{ data: NAV_MENU }]);
            setNavItemActive('home');
        }

        // eslint-disable-next-line
    }, [pathname, code, condition]);

    useEffect(() => {
        if (pathname.includes('/website') && navigateState.code === 'music') {
            dispatch(setCode('website'));
            setHistory((prev) => prev.slice(0, prev.length - 1));
            setCondition((pre) => !pre);
        }

        if (pathname.includes('/music') && navigateState.code === 'website') {
            dispatch(setCode('music'));
            setHistory((prev) => prev.slice(0, prev.length - 1));
            setCondition((pre) => !pre);
        }
        // eslint-disable-next-line
    }, [pathname, code]);

    const renderItems = () => {
        return (
            current.data &&
            current.data.map((item, index) => {
                const isParent = !!item.children;
                return (
                    <NavItem
                        key={index}
                        data={item}
                        navItemActive={navItemActive}
                        onClick={() => {
                            if (isParent) {
                                setHistory((prev) => [...prev, item.children]);
                                dispatch(setCode(item.code));
                                dispatch(setHistoryStore(1));
                            } else {
                                setNavItemActive(item.code);
                            }
                        }}
                    />
                );
            })
        );
    };
    return (
        <nav className={cx('wrapper')}>
            <h3 className={cx('title')}> Menu </h3>
            {history.length > 1 && (
                <Header
                    title={current.title}
                    to={current.to}
                    onBack={() => {
                        setHistory((prev) => prev.slice(0, prev.length - 1));
                        dispatch(setHistoryStore(0));
                        setNavItemActive('home');
                    }}
                />
            )}
            {renderItems()}
        </nav>
    );
}

export default Navigation;
