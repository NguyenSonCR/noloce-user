import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import config from '~/config';
import styles from './NaviMobi.module.scss';
import { TfiMusicAlt } from 'react-icons/tfi';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';

const cx = classNames.bind(styles);
function NaviMobi() {
    const [navigation, setNavigation] = useState('home');
    const handleClick = (data) => {
        setNavigation(data);
    };

    return (
        <div className={cx('wrapper')}>
            <Link to={config.routes.home} className={cx('list')} onClick={() => handleClick('home')}>
                <AiOutlineHome className={cx('icon', navigation === 'home' && 'active')} />
                <p className={cx('text')}>Trang chủ</p>
            </Link>

            <Link to={config.routes.music} className={cx('list')} onClick={() => handleClick('post')}>
                <TfiMusicAlt className={cx('icon', navigation === 'post' && 'active')} />
                <p className={cx('text')}>Âm nhạc</p>
            </Link>
            <Link className={cx('list')} onClick={() => handleClick('user')}>
                <AiOutlineUser className={cx('icon', navigation === 'user' && 'active')} />
                <p className={cx('text')}>Tài khoản</p>
            </Link>
        </div>
    );
}

export default NaviMobi;
