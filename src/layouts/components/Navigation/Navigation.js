import classNames from 'classnames/bind';
import styles from './Navigation.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSignsPost, faStore } from '@fortawesome/free-solid-svg-icons';
import config from '~/config';
import { useState } from 'react';
import NavItem from './NavItem';
import Header from './Header';

const cx = classNames.bind(styles);

function Navigation() {
    const NAV_MENU = [
        {
            icon: <FontAwesomeIcon icon={faStore} />,
            title: 'Music',
            code: 'music',
            to: config.routes.music,
            children: {
                title: 'Music',
                data: [
                    {
                        title: 'Cá nhân',
                        code: '',
                    },
                    {
                        title: 'Mới nhất',
                        code: '',
                    },
                    {
                        title: 'Top 100',
                        code: '',
                    },
                    {
                        title: 'Thể loại',
                        code: '',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faSignsPost} />,
            code: 'cinema',
            title: 'Cinema',
            to: config.routes.cinema,
        },
        {
            icon: <FontAwesomeIcon icon={faBars} />,
            code: 'website',
            title: 'Website',
            children: {
                title: 'Website',
                data: [
                    {
                        title: 'React',
                        code: 'react',
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
                        onClick={() => {
                            if (isParent) {
                                setHistory((prev) => [...prev, item.children]);
                            } else {
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
