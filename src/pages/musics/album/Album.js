import styles from './Album.module.scss';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SongItem from '~/layouts/components/SongItem';
import { setAlbum } from '~/slices/songSlice';
import musicApi from '~/api/music/musicApi';
import Loading from '~/layouts/components/Loading';

const cx = classNames.bind(styles);

function Album() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const songState = useSelector((state) => state.song);
    useEffect(() => {
        musicApi.getAlbumZing(id).then((response) => {
            dispatch(setAlbum(response.data));
        });
        // eslint-disable-next-line
    }, []);

    let body = null;
    if (songState.album) {
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
                        <SongItem songList={songState.album.song.items} />
                    </ul>
                </div>
            </div>
        );
    } else {
        body = (
            <div>
                <Loading />
                <Loading />
                <Loading />
                <Loading />
            </div>
        );
    }

    return body;
}

export default Album;
