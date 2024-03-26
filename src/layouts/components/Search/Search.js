import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { Wrapper } from '~/components/Popper';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDebounce } from '~/hooks';
import useViewport from '~/hooks/useViewport';

const cx = classNames.bind(styles);

function Search({ visible }) {
    const viewPort = useViewport();
    const isMobile = viewPort.width < 740;

    const searchResult = [];
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const debouncedValue = useDebounce(query, 500);
    const [show, setShow] = useState(false);
    const inputRef = useRef();

    const handleOnChange = (event) => {
        setQuery(event.target.value);
    };

    useEffect(() => {
        setLoading(true);
        if (!debouncedValue.trim()) {
            setLoading(false);
            setShow(false);
            return;
        } else {
            handleSearch();
        }
        // eslint-disable-next-line
    }, [debouncedValue]);

    const handleSearch = () => {};

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
            inputRef.current.blur();
            setLoading(true);
            if (!debouncedValue.trim()) {
                setLoading(false);
                setShow(false);
                return;
            } else {
            }
        }
    };

    const handleClickSearch = () => {
        inputRef.current.blur();
        setLoading(true);
        if (!debouncedValue.trim()) {
            setLoading(false);
            setShow(false);
            return;
        } else {
        }
    };

    const handleClear = () => {
        setQuery('');
    };

    let body = null;
    if (isMobile) {
        body = (
            <div className={cx('mobile')}>
                <Tippy
                    delay={[0, 300]}
                    visible={visible ? visible : show}
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <Wrapper className={cx('search-result-popper')}>
                                <div
                                    className={cx('search-result-body')}
                                    onMouseDown={(e) => e.preventDefault()}
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        inputRef.current.blur();
                                    }}
                                >
                                    <div className={cx('search-result-header')}>
                                        <FontAwesomeIcon
                                            icon={faMagnifyingGlass}
                                            className={cx('result-icon')}
                                        ></FontAwesomeIcon>
                                        <p className={cx('result-text')}>Gợi ý kết quả</p>
                                    </div>
                                    <div className={cx('result-content')}></div>
                                    <div className={cx('footer')}>
                                        <Link className={cx('footer-link')}>Xem tất cả</Link>
                                    </div>
                                </div>
                            </Wrapper>
                        </div>
                    )}
                >
                    <div className={cx('wrapper')}>
                        <input
                            name="search"
                            autoComplete="off"
                            ref={inputRef}
                            className={cx('input')}
                            placeholder="Tìm kiếm "
                            spellCheck={false}
                            onChange={handleOnChange}
                            onKeyUp={handleEnter}
                            value={query}
                            onBlur={() => {
                                setShow(false);
                            }}
                            onFocus={() => {
                                if (searchResult) setShow(true);
                            }}
                        ></input>

                        {!loading && (
                            <FontAwesomeIcon icon={faCircleXmark} className={cx('clear')} onClick={handleClear} />
                        )}

                        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                        <div className={cx('split')}></div>
                        <div className={cx('search-btn')} onClick={handleClickSearch}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-btn-icon')} />
                        </div>
                    </div>
                </Tippy>
            </div>
        );
    }

    if (!isMobile) {
        body = (
            <Tippy
                delay={[0, 300]}
                visible={visible ? visible : show}
                interactive
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <Wrapper className={cx('search-result-popper')}>
                            <div
                                className={cx('search-result-body')}
                                onMouseDown={(e) => e.preventDefault()}
                                onClick={(event) => {
                                    event.stopPropagation();
                                    inputRef.current.blur();
                                }}
                            >
                                <div className={cx('search-result-header')}>
                                    <FontAwesomeIcon
                                        icon={faMagnifyingGlass}
                                        className={cx('result-icon')}
                                    ></FontAwesomeIcon>
                                    <p className={cx('result-text')}>Gợi ý kết quả</p>
                                </div>
                                <div className={cx('result-content')}></div>
                                <div className={cx('footer')}>
                                    <Link className={cx('footer-link')}>Xem tất cả</Link>
                                </div>
                            </div>
                        </Wrapper>
                    </div>
                )}
            >
                <div className={cx('wrapper')}>
                    <input
                        autoComplete="off"
                        name="search"
                        ref={inputRef}
                        className={cx('input')}
                        placeholder="Tìm kiếm "
                        spellCheck={false}
                        onChange={handleOnChange}
                        onKeyUp={handleEnter}
                        value={query}
                        onBlur={() => {
                            setShow(false);
                        }}
                        onFocus={() => {
                            if (searchResult) setShow(true);
                        }}
                    ></input>

                    {!loading && <FontAwesomeIcon icon={faCircleXmark} className={cx('clear')} onClick={handleClear} />}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <div className={cx('split')}></div>
                    <div className={cx('search-btn')} onClick={handleClickSearch}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-btn-icon')} />
                    </div>
                </div>
            </Tippy>
        );
    }
    return body;
}

export default Search;
