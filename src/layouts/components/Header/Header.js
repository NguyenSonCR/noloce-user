import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import images from '~/assets/img';
import config from '~/config';
import Tippy from '@tippyjs/react/headless';
import Search from '../Search';
import { Wrapper } from '~/components/Popper';

const cx = classNames.bind(styles);
function Header() {
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
                                <Tippy
                                    delay={400}
                                    interactive={true}
                                    hideOnClick={false}
                                    offset={[0, 0]}
                                    placement={'top-end'}
                                    render={(attrs) => (
                                        <div className={cx('user-wrapper')} tabIndex="-1" {...attrs}>
                                            <Wrapper>
                                                <p>Content</p>
                                            </Wrapper>
                                        </div>
                                    )}
                                >
                                    <div className={cx('user')}>
                                        <img src={images.avatar} alt="user" className={cx('user-img')}></img>
                                        <span className={cx('user-name')}>Son nguyen</span>
                                    </div>
                                </Tippy>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
