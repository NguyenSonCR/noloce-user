import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { Wrapper } from '~/components/Popper';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/img';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import musicApi from '~/api/music/musicApi';
import { useDispatch } from 'react-redux';
import { getSearchResult } from '~/slices/songSlice';

const cx = classNames.bind(styles);

function Search() {
    const [query, setQuery] = useState('');
    const handleOnChange = (event) => {
        setQuery(event.target.value);
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSearchQuery = (event) => {
        if (event.key === 'Enter' && query.length > 0) {
            musicApi.searchSong(query).then((response) => {
                if (response.success) {
                    dispatch(getSearchResult(response.result));
                    navigate(`/music/search`);
                }
            });
        }
    };

    const handleSearchSubmit = () => {
        if (query.length > 0) {
            musicApi.searchSong(query).then((response) => {
                if (response.success) {
                    dispatch(getSearchResult(response.data));
                    navigate(`/music/search`);
                }
            });
        }
    };

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
                <input
                    className={cx('input')}
                    placeholder="Tìm kiếm "
                    spellCheck={false}
                    onChange={handleOnChange}
                    onKeyUp={handleSearchQuery}
                    value={query}
                ></input>

                <FontAwesomeIcon icon={faCircleXmark} className={cx('clear')} />

                {false && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                <div className={cx('split')}></div>
                <div className={cx('search-btn')} onClick={handleSearchSubmit}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-btn-icon')} />
                </div>
            </div>
        </Tippy>
    );
}

export default Search;
