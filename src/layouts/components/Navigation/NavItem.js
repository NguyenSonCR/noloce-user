import classNames from 'classnames/bind';
import styles from './Navigation.module.scss';
import PropTypes from 'prop-types';
import Button from '~/components/Button';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function NavItem({ data, onClick, navItemActive }) {
    const { pathname } = useLocation();
    const [active, setActive] = useState(navItemActive);
    useEffect(() => {
        if (pathname === '/') {
            return;
        } else {
            setActive(pathname);
        }
    }, [pathname]);

    return (
        <div className={cx('content')}>
            <div className={cx('nav-item', active === data.to && 'active')}>
                {data.icon && <div className={cx('icon')}>{data.icon}</div>}
                <Button className={cx('text', 'navigation')} to={data.to} onClick={onClick}>
                    {data.title && data.title}
                </Button>
            </div>
        </div>
    );
}

NavItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default NavItem;
