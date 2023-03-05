import styles from './PlaylistItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadSong, play, pause } from '~/slices/songSlice';
import { TfiMusicAlt } from 'react-icons/tfi';
import musicApi from '~/api/music/musicApi';
import React from 'react';
import { addToast } from '~/slices/toastSlice';

const cx = classNames.bind(styles);

function PlaylistItem({ songList }) {
    const dispatch = useDispatch();
    const songState = useSelector((state) => state.song);
    const toastState = useSelector((state) => state.toast);
    const [choose, setChoose] = useState(false);

    const handleChoose = () => {
        if (choose) {
            setChoose(false);
        } else {
            setChoose(true);
        }
    };

    useEffect(() => {}, [songState.item]);
    const handleSelectSong = async (item) => {
        dispatch(loadSong(item));
        try {
            const response = await musicApi.getSong(item.encodeId);
            if (response.success) {
                dispatch(
                    loadSong({
                        ...item,
                        link: response.data['128'],
                    }),
                );
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
                    </div>
                ))}
        </div>
    );
}

export default PlaylistItem;
