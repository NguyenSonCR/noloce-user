import classNames from 'classnames/bind';
import styles from './Navigation.module.scss';
import config from '~/config';
import { useState } from 'react';
import NavItem from './NavItem';
import Header from './Header';
import { ReactComponent as IconMusic } from '~/assets/icon/icons8-music.svg';
import { ReactComponent as IconKinds } from '~/assets/icon/kinds.svg';
import images from '~/assets/img';

const cx = classNames.bind(styles);

function Navigation() {
    const [navItem, setNavItem] = useState('home');
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
            icon: <img src={images.cenima} alt=""></img>,
            code: 'cinema',
            title: 'Cinema',
            to: config.routes.cinema,
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
                        code: 'about',
                    },
                    {
                        title: 'Quy trình',
                        code: '',
                        to: config.routes.procedure,
                    },
                    {
                        title: 'Bảng giá',
                        code: 'price',
                    },

                    {
                        title: 'Demo',
                        code: 'demo',
                    },
                ],
            },
        },
    ];

    const [history, setHistory] = useState([{ data: NAV_MENU }]);

    const current = history[history.length - 1];

    const renderItems = () => {
        return (
            current.data &&
            current.data.map((item, index) => {
                const isParent = !!item.children;
                return (
                    <NavItem
                        key={index}
                        data={item}
                        navItem={navItem}
                        onClick={() => {
                            if (isParent) {
                                setHistory((prev) => [...prev, item.children]);
                            } else {
                                setNavItem(item.code);
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
                    }}
                />
            )}
            {renderItems()}
        </nav>
    );
}

export default Navigation;
