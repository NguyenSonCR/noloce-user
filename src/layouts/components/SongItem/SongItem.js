import styles from './SongItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faHeart, faEllipsis, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadSong, play, pause, setSongLyric } from '~/slices/songSlice';
import { TfiMusicAlt } from 'react-icons/tfi';
import musicApi from '~/api/music/musicApi';
import React from 'react';
import { addToast } from '~/slices/toastSlice';
import axios from 'axios';

const cx = classNames.bind(styles);

function SongItem({ songList }) {
    const dispatch = useDispatch();
    const songState = useSelector((state) => state.song);
    const toastState = useSelector((state) => state.toast);
    const [choose, setChoose] = useState(false);

    // function
    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    };

    const handleChoose = () => {
        if (choose) {
            setChoose(false);
        } else {
            setChoose(true);
        }
    };

    const convertTimeToNumber = (string) => {
        const minutes = string.slice(1, 2);
        const seconds = string.slice(3, 9);
        const value = Math.round(Number(minutes) * 60 * 1000 + Math.round(Number(seconds) * 1000));
        return value;
    };

    const handleSelectSong = async (item) => {
        try {
            const response = await musicApi.getSong(item.encodeId);
            const responseLyric = await musicApi.getLyricSong(item.encodeId);

            if (responseLyric.success) {
                const lyric = await axios.get(responseLyric.lyric.file, {
                    headers: {
                        'content-type': 'application/octet-stream',
                    },
                });
                const array = lyric.data.split('\n');
                console.log(array);
                const array1 = array.map((line) => {
                    return {
                        startTime: convertTimeToNumber(line.slice(1, 9)),
                        words: line.slice(10, line.length),
                    };
                });
                console.log(array1);
                dispatch(setSongLyric(array1));
            }

            if (response.success && responseLyric.success) {
                dispatch(
                    loadSong({
                        ...item,
                        link: response.data['128'],
                        thumbnailM: response.info.thumbnailM,
                    }),
                );
                // dispatch(setSongLyric(responseLyric.lyric.sentences));
            } else {
                dispatch(
                    addToast({
                        id: toastState.toastList.length + 1,
                        content: response.message,
                        type: 'success',
                    }),
                );
            }
        } catch (error) {
            console.log(error);
        }
    };

    // scroll

    const refs = songList.reduce((song, value) => {
        song[value.encodeId] = React.createRef();
        return song;
    }, {});

    const handleClickScroll = (id) => {
        refs[id]?.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    };

    useEffect(() => {
        if (songState.song) {
            handleClickScroll(songState.song.encodeId);
        }
        // eslint-disable-next-line
    }, [songState?.song?.encodeId]);

    return (
        <div>
            {songList &&
                songList.map((item, index) => (
                    <div
                        key={index}
                        className={cx(
                            'wrapper',
                            songState.song && songState.song.encodeId === item.encodeId && 'active',
                        )}
                        onClick={() => {
                            handleSelectSong(item);
                        }}
                        ref={refs[item.encodeId]}
                    >
                        <div className={cx('song')}>
                            <TfiMusicAlt className={cx('icon')} />
                            <input className={cx('input')} type={'checkbox'} onClick={handleChoose}></input>
                            <div className={cx('info')}>
                                <div
                                    className={cx('info-img')}
                                    onClick={(event) => {
                                        event.stopPropagation();
                                    }}
                                >
                                    <img className={cx('img')} alt="" src={item.thumbnail}></img>
                                    {songState.song && songState.song.encodeId === item.encodeId && songState.isPlay ? (
                                        <div
                                            className={cx('img-play')}
                                            onClick={() => {
                                                dispatch(pause());
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faPause} className={cx('img-play-icon')} />
                                        </div>
                                    ) : (
                                        <div
                                            className={cx('img-play')}
                                            onClick={() => {
                                                if (songState.song && songState.song.encodeId === item.encodeId) {
                                                    dispatch(play());
                                                } else {
                                                    handleSelectSong(item);
                                                }
                                            }}
                                        >
                                            <FontAwesomeIcon icon={faPlay} className={cx('img-play-icon')} />
                                        </div>
                                    )}
                                </div>
                                <div className={cx('info-list')}>
                                    <p className={cx('name')}>{item.title}</p>
                                    <p className={cx('author')}>{item.artistsNames}</p>
                                </div>
                            </div>
                        </div>
                        <div className={cx('album')}>
                            <p> {item.album && item.album.title}</p>
                            <div className={cx('action')}>
                                <Tippy content="Phát cùng lời bài hát">
                                    <div className={cx('action-wrapper')}>
                                        <FontAwesomeIcon className={cx('action-item')} icon={faMicrophone} />
                                    </div>
                                </Tippy>
                                <Tippy content="Thêm vào thư viện">
                                    <div className={cx('action-wrapper')}>
                                        <FontAwesomeIcon className={cx('action-item')} icon={faHeart} />
                                    </div>
                                </Tippy>
                                <Tippy content="Khác">
                                    <div className={cx('action-wrapper')}>
                                        <FontAwesomeIcon className={cx('action-item')} icon={faEllipsis} />
                                    </div>
                                </Tippy>
                            </div>
                            <p className={cx('duration')}>{calculateTime(item.duration)}</p>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default SongItem;
