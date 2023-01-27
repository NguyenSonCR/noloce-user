import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { Wrapper } from '~/components/Popper';

import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/img';

const cx = classNames.bind(styles);

function Search() {
    return (
        <Tippy
            delay={[0, 300]}
            placement="bottom-end"
            visible={false}
            interactive
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <Wrapper className={cx('search-result-popper')}>
                        <div className={cx('search-result-body')}>
                            <div className={cx('search-result-header')}>
                                <FontAwesomeIcon
                                    icon={faMagnifyingGlass}
                                    className={cx('result-icon')}
                                ></FontAwesomeIcon>
                                <p className={cx('result-text')}>Kết quả cho ...</p>
                            </div>
                            <div className={cx('result-content')}>
                                <div className={cx('result-item')}>
                                    <img src={images.product} alt="search" className={cx('result-item-img')}></img>
                                    <p className={cx('result-item-decription')}>Trang web tìm kiếm</p>
                                </div>
                                <div className={cx('result-item')}>
                                    <img src={images.product} alt="search" className={cx('result-item-img')}></img>
                                    <p className={cx('result-item-decription')}>Trang web tìm kiếm</p>
                                </div>
                                <div className={cx('result-item')}>
                                    <img src={images.product} alt="search" className={cx('result-item-img')}></img>
                                    <p className={cx('result-item-decription')}>Trang web tìm kiếm</p>
                                </div>
                            </div>
                        </div>
                    </Wrapper>
                </div>
            )}
        >
            <div className={cx('wrapper')}>
                <input className={cx('input')} placeholder="Tìm kiếm " spellCheck={false}></input>

                <FontAwesomeIcon icon={faCircleXmark} className={cx('clear')} />

                {false && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <div className={cx('split')}></div>
                <div className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-btn-icon')} />
                </div>
            </div>
        </Tippy>
    );
}

export default Search;
