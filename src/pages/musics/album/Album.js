import styles from './Album.module.scss';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SongItem from '~/layouts/components/SongItem';
import { setAlbum } from '~/slices/songSlice';
import musicApi from '~/api/music/musicApi';
import useViewport from '~/hooks/useViewport';

const cx = classNames.bind(styles);

function Album() {
    const viewPort = useViewport();
    const isMobile = viewPort.width < 740;

    const dispatch = useDispatch();
    const songState = useSelector((state) => state.song);
    const { id } = useParams();
    let condition;
    if (id === songState?.album?.encodeId) {
        condition = false;
    } else {
        condition = true;
    }
    const [loading, setLoading] = useState(condition);

    useEffect(() => {
        if (loading) {
            musicApi.getAlbumZing(id).then((response) => {
                dispatch(setAlbum(response.data));
                setLoading(false);
            });
        }

        // eslint-disable-next-line
    }, [songState?.album?.encodeId]);

    let body = null;
    if (loading) {
        body = (
            <div className={cx(['row'])}>
                {!isMobile ? (
                    <div className={cx(['col', 'l-4', 'm-6', 'c-12'])}>
                        <div className={cx('center')}>
                            <div className={cx('loading-img')} style={{ animation: 'loading 2s infinite' }}></div>
                            <p className={cx('single-loading')} style={{ animation: 'loading 2s infinite' }}></p>
                            <p className={cx('single-loading')} style={{ animation: 'loading 2s infinite' }}></p>
                        </div>
                    </div>
                ) : (
                    <div className={cx('mobile-loading')}>
                        <div className={cx('loading-img')} style={{ animation: 'loading 2s infinite' }}></div>
                        <p className={cx('single-loading')} style={{ animation: 'loading 2s infinite' }}></p>
                        <p className={cx('single-loading')} style={{ animation: 'loading 2s infinite' }}></p>
                    </div>
                )}
                <div className={cx(['col', 'l-8', 'm-6', 'c-12'])}>
                    <p className={cx('single-loading')} style={{ animation: 'loading 2s infinite' }}></p>
                    <p className={cx('single-loading')} style={{ animation: 'loading 2s infinite' }}></p>
                    <div className={cx('loading-song')}>
                        <div className={cx('loading-song-img')}></div>
                        <div className={cx('loading-song-content')}>
                            <p className={cx('single-loading-song')} style={{ animation: 'loading 2s infinite' }}></p>
                            <p className={cx('single-loading-song')} style={{ animation: 'loading 2s infinite' }}></p>
                        </div>
                    </div>
                    <div className={cx('loading-song')}>
                        <div className={cx('loading-song-img')}></div>
                        <div className={cx('loading-song-content')}>
                            <p className={cx('single-loading-song')} style={{ animation: 'loading 2s infinite' }}></p>
                            <p className={cx('single-loading-song')} style={{ animation: 'loading 2s infinite' }}></p>
                        </div>
                    </div>
                    <div className={cx('loading-song')}>
                        <div className={cx('loading-song-img')}></div>
                        <div className={cx('loading-song-content')}>
                            <p className={cx('single-loading-song')} style={{ animation: 'loading 2s infinite' }}></p>
                            <p className={cx('single-loading-song')} style={{ animation: 'loading 2s infinite' }}></p>
                        </div>
                    </div>
                    <div className={cx('loading-song')}>
                        <div className={cx('loading-song-img')}></div>
                        <div className={cx('loading-song-content')}>
                            <p className={cx('single-loading-song')} style={{ animation: 'loading 2s infinite' }}></p>
                            <p className={cx('single-loading-song')} style={{ animation: 'loading 2s infinite' }}></p>
                        </div>
                    </div>
                    <div className={cx('loading-song')}>
                        <div className={cx('loading-song-img')}></div>
                        <div className={cx('loading-song-content')}>
                            <p className={cx('single-loading-song')} style={{ animation: 'loading 2s infinite' }}></p>
                            <p className={cx('single-loading-song')} style={{ animation: 'loading 2s infinite' }}></p>
                        </div>
                    </div>
                    <div className={cx('loading-song')}>
                        <div className={cx('loading-song-img')}></div>
                        <div className={cx('loading-song-content')}>
                            <p className={cx('single-loading-song')} style={{ animation: 'loading 2s infinite' }}></p>
                            <p className={cx('single-loading-song')} style={{ animation: 'loading 2s infinite' }}></p>
                        </div>
                    </div>
                    <div className={cx('loading-song')}>
                        <div className={cx('loading-song-img')}></div>
                        <div className={cx('loading-song-content')}>
                            <p className={cx('single-loading-song')} style={{ animation: 'loading 2s infinite' }}></p>
                            <p className={cx('single-loading-song')} style={{ animation: 'loading 2s infinite' }}></p>
                        </div>
                    </div>
                    <div className={cx('loading-song')}>
                        <div className={cx('loading-song-img')}></div>
                        <div className={cx('loading-song-content')}>
                            <p className={cx('single-loading-song')} style={{ animation: 'loading 2s infinite' }}></p>
                            <p className={cx('single-loading-song')} style={{ animation: 'loading 2s infinite' }}></p>
                        </div>
                    </div>
                    <div className={cx('loading-song')}>
                        <div className={cx('loading-song-img')}></div>
                        <div className={cx('loading-song-content')}>
                            <p className={cx('single-loading-song')} style={{ animation: 'loading 2s infinite' }}></p>
                            <p className={cx('single-loading-song')} style={{ animation: 'loading 2s infinite' }}></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        if (isMobile) {
            body = (
                <div className={cx('mobile')}>
                    <div className={cx('wrapper', ['row'])}>
                        <div className={cx(['col', 'l-4', 'm-6', 'c-12'])}>
                            <div className={cx('song-list')}>
                                <div className={cx('song-img')}>
                                    <img
                                        alt=""
                                        src={songState.album.thumbnailM || songState.album.thumbnail}
                                        className={cx('img-content')}
                                    ></img>
                                    <div className={cx('overlay')}>
                                        <div className={cx('overplay-wrapper')}>
                                            <FontAwesomeIcon className={cx('overlay-icon')} icon={faPlay} />
                                        </div>
                                    </div>
                                </div>

                                <p className={cx('song-name')}>{songState.album.title}</p>

                                <p className={cx('list-author')}>
                                    {songState.album.artists.map((artist, index) => {
                                        if (index < songState.album.artists.length - 1) {
                                            return <span key={index}>{artist.name}, </span>;
                                        } else {
                                            return <span key={index}>{artist.name}</span>;
                                        }
                                    })}
                                </p>
                            </div>
                        </div>
                        <div className={cx('content', ['col', 'l-8'])}>
                            <ul className={cx('content-header')}>
                                <li className={cx('content-header-item')}>
                                    <span>Lời tựa: </span>
                                    {songState.album.description}
                                </li>
                            </ul>
                            <ul className={cx('content-body')}>
                                <div className={cx('content-body__title')}>
                                    <p className={cx('content-body__item')}>Bài hát</p>
                                    <div className={cx('album')}>
                                        <p className={cx('album__item')}>Album</p>
                                        <p className={cx('album__item')}>Thời gian</p>
                                    </div>
                                </div>
                                <div className={cx('content-body-song')}>
                                    <SongItem songList={songState.album.song.items} title={songState.album.title} />
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }
        if (!isMobile) {
            body = (
                <div className={cx('wrapper', ['row'])}>
                    <div className={cx(['col', 'l-4'])}>
                        <div className={cx('song-list')}>
                            <div className={cx('song-img')}>
                                <img
                                    alt=""
                                    src={songState.album.thumbnailM || songState.album.thumbnail}
                                    className={cx('img-content')}
                                ></img>
                                <div className={cx('overlay')}>
                                    <div className={cx('overplay-wrapper')}>
                                        <FontAwesomeIcon className={cx('overlay-icon')} icon={faPlay} />
                                    </div>
                                </div>
                            </div>

                            <p className={cx('song-name')}>{songState.album.title}</p>

                            <p className={cx('list-author')}>
                                {songState.album.artists.map((artist, index) => {
                                    if (index < songState.album.artists.length - 1) {
                                        return <span key={index}>{artist.name}, </span>;
                                    } else {
                                        return <span key={index}>{artist.name}</span>;
                                    }
                                })}
                            </p>
                        </div>
                    </div>
                    <div className={cx('content', ['col', 'l-8'])}>
                        <ul className={cx('content-header')}>
                            <li className={cx('content-header-item')}>
                                <span>Lời tựa: </span>
                                {songState.album.description}
                            </li>
                        </ul>
                        <ul className={cx('content-body')}>
                            <div className={cx('content-body__title')}>
                                <p className={cx('content-body__item')}>Bài hát</p>
                                <div className={cx('album')}>
                                    <p className={cx('album__item')}>Album</p>
                                    <p className={cx('album__item')}>Thời gian</p>
                                </div>
                            </div>
                            <div className={cx('content-body-song')}>
                                <SongItem songList={songState.album.song.items} title={songState.album.title} />
                            </div>
                        </ul>
                    </div>
                </div>
            );
        }
    }

    return body;
}

export default Album;
