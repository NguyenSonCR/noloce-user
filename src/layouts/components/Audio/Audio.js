import classNames from 'classnames/bind';
import styles from './Audio.module.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEllipsis, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { ReactComponent as CloseIcon } from '~/assets/icon/close.svg';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    play,
    pause,
    volume,
    muted,
    loop,
    random,
    mounted,
    loadSong,
    setPlaylist,
    setSongLyric,
    setLyricPage,
} from '~/slices/songSlice';
import images from '~/assets/img';
import { TbMicrophone2 } from 'react-icons/tb';
import { BsVolumeUp, BsVolumeMute } from 'react-icons/bs';
import { RxTrackNext, RxTrackPrevious, RxPause, RxPlay, RxShuffle, RxLoop, RxListBullet } from 'react-icons/rx';
import musicApi from '~/api/music/musicApi';
import SongLyric from '~/layouts/components/SongLyric';

const cx = classNames.bind(styles);
function AudioSong() {
    // get store redux
    const songState = useSelector((state) => state.song);
    const dispatch = useDispatch();

    // state
    const [small, setSmall] = useState(false);
    const pageLyrics = songState.lyricPage;
    const [currentTime, setCurrentTime] = useState(0);
    const [seeking, setSeeking] = useState(false);
    // references
    const audioPlayer = useRef(); // reference our audio component
    const progressBar = useRef(); // reference our progress bar
    const animationRef = useRef(); // reference the animation currenttime
    const progressRef = useRef(); // reference the animation progress

    // useEffect
    // play and pause
    useEffect(() => {
        if (songState.isPlay) {
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying);
            progressRef.current = requestAnimationFrame(whileSeeking);
        } else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current);
            cancelAnimationFrame(progressRef.current);
        }
        // eslint-disable-next-line
    }, [songState.isPlay]);

    // setting step
    const step = 1;

    // change song
    useEffect(() => {
        progressBar.current.max = songState.song.duration * step;
        if (songState.isPlay) {
            audioPlayer.current.pause();
            audioPlayer.current = new Audio(songState.song.link);
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying);
            progressRef.current = requestAnimationFrame(whileSeeking);
        } else {
            audioPlayer.current = new Audio(songState.song.link);
            animationRef.current = requestAnimationFrame(whilePlaying);
            progressRef.current = requestAnimationFrame(whileSeeking);
        }
        // eslint-disable-next-line
    }, [songState.song]);

    // function
    const calculateTime = (secs) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    };

    const whilePlaying = () => {
        setCurrentTime(progressBar?.current?.value / step);
        animationRef.current = requestAnimationFrame(whilePlaying);
    };

    const whileSeeking = () => {
        progressBar.current.value = audioPlayer?.current?.currentTime * step;
        progressRef.current = requestAnimationFrame(whileSeeking);
    };

    useEffect(() => {
        changeRange();
        // eslint-disable-next-line
    }, [seeking]);

    const changeRange = () => {
        if (seeking) {
            cancelAnimationFrame(progressRef.current);
        } else {
            audioPlayer.current.currentTime = progressBar.current.value / step;
            progressRef.current = requestAnimationFrame(whileSeeking);
            setCurrentTime(progressBar.current.value / step);
        }
    };

    // volume
    useEffect(() => {
        if (songState.muted) {
            audioPlayer.current.volume = 0.0;
        } else {
            audioPlayer.current.volume = songState.volume;
        }
    }, [songState.isPlay, songState.volume, songState.muted]);

    // handle duration and progress

    const handleMuted = () => {
        dispatch(muted(true));
    };

    const handleChangeVolume = (event) => {
        dispatch(volume(event.target.value / 100));
    };

    // loop
    useEffect(() => {
        if (songState.loop) {
            audioPlayer.current.loop = true;
        } else {
            audioPlayer.current.loop = false;
        }
    }, [songState.loop]);

    const handleRepeat = () => {
        if (songState.loop) {
            dispatch(loop(false));
        } else {
            dispatch(loop(true));
        }
    };

    const handleRandom = () => {
        if (songState.random) {
            dispatch(random(false));
        } else {
            dispatch(random(true));
        }
    };

    const handleClose = () => {
        dispatch(pause());
        dispatch(mounted());
    };

    const handleShuffleSong = async () => {
        try {
            const randomId = Math.floor(Math.random() * songState.album.song.items.length);
            const response = await musicApi.getSong(songState.album.song.items[randomId].encodeId);
            const responseLyric = await musicApi.getLyricSong(songState.album.song.items[randomId].encodeId);
            if (response.success) {
                dispatch(
                    loadSong({
                        ...songState.album.song.items[randomId],
                        link: response.data['128'],
                    }),
                );
            }
            if (responseLyric.success) dispatch(setSongLyric(responseLyric.lyric.sentences));
        } catch (error) {
            console.log(error);
        }
    };

    const index = songState?.album?.song.items.findIndex((song) => song.encodeId === songState.song.encodeId);

    const handleNextSong = async () => {
        if (songState.random) {
            handleShuffleSong();
        } else {
            try {
                if (index === songState.album.song.items.length - 1) {
                    const response = await musicApi.getSong(songState.album.song.items[0].encodeId);
                    const responseLyric = await musicApi.getLyricSong(songState.album.song.items[0].encodeId);
                    if (response.success) {
                        dispatch(
                            loadSong({
                                ...songState.album.song.items[0],
                                link: response.data['128'],
                            }),
                        );
                    }
                    if (responseLyric.success) dispatch(setSongLyric(responseLyric.lyric.sentences));
                } else {
                    const songId = index + 1;
                    const response = await musicApi.getSong(songState.album.song.items[songId].encodeId);
                    const responseLyric = await musicApi.getLyricSong(songState.album.song.items[songId].encodeId);
                    if (response.success) {
                        dispatch(
                            loadSong({
                                ...songState.album.song.items[songId],
                                link: response.data['128'],
                            }),
                        );
                    }
                    if (responseLyric.success) dispatch(setSongLyric(responseLyric.lyric.sentences));
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handlePreSong = async () => {
        if (songState.random) {
            handleShuffleSong();
        } else {
            try {
                if (index === 0) {
                    const songId = songState.album.song.items.length - 1;
                    const response = await musicApi.getSong(songState.album.song.items[songId].encodeId);
                    const responseLyric = await musicApi.getLyricSong(songState.album.song.items[songId].encodeId);
                    if (response.success) {
                        dispatch(
                            loadSong({
                                ...songState.album.song.items[songId],
                                link: response.data['128'],
                            }),
                        );
                    }
                    if (responseLyric.success) dispatch(setSongLyric(responseLyric.lyric.sentences));
                } else {
                    const songId = index - 1;
                    const response = await musicApi.getSong(songState.album.song.items[songId].encodeId);
                    const responseLyric = await musicApi.getLyricSong(songState.album.song.items[songId].encodeId);
                    if (response.success) {
                        dispatch(
                            loadSong({
                                ...songState.album.song.items[songId],
                                link: response.data['128'],
                            }),
                        );
                    }
                    if (responseLyric.success) dispatch(setSongLyric(responseLyric.lyric.sentences));
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleLoopSong = () => {
        dispatch(pause());
        dispatch(play());
    };

    const timeSong = Math.round(currentTime);

    useEffect(() => {
        if (timeSong !== 0 && timeSong === songState.song.duration && songState.song) {
            if (songState.loop) {
                handleLoopSong();
            } else if (songState.random) {
                handleShuffleSong();
            } else {
                handleNextSong();
            }
        }
        // eslint-disable-next-line
    }, [timeSong]);

    // playlist
    const onChangePlaylist = () => {
        if (songState.playlist) {
            dispatch(setPlaylist(false));
        } else {
            dispatch(setPlaylist(true));
        }
    };

    return (
        <div className={cx(!songState.mounted && 'show')}>
            {songState.song && <audio src={songState.song.link} ref={audioPlayer} preload={'metadata'}></audio>}
            <div className={cx('wrapper', pageLyrics && 'page_lyrics', small && 'small')}>
                {!pageLyrics && (
                    <div className={cx('responsive')}>
                        <div
                            className={cx('button-close')}
                            onClick={() => {
                                if (songState.playlist) {
                                    dispatch(setPlaylist(false));
                                }
                                setSmall(true);
                            }}
                        >
                            <img alt="" className={cx('responsive-icon')} src={images.shrink}></img>
                        </div>
                        <div className={cx('button-close')}>
                            <CloseIcon
                                className={cx('responsive-icon')}
                                onClick={() => {
                                    handleClose();
                                }}
                            />
                        </div>
                    </div>
                )}
                {!pageLyrics && (
                    <div className={cx('info')}>
                        <img alt="" className={cx('info-img')} src={songState.song && songState.song.thumbnailM}></img>
                        <div className={cx('info-song')}>
                            <p>{songState.song && songState.song.title}</p>
                            <p>{songState.song && songState.song.artistNames}</p>
                        </div>
                        <div className={cx('info-icon')}>
                            <FontAwesomeIcon icon={faHeart} />
                        </div>
                        <div className={cx('info-icon')}>
                            <FontAwesomeIcon icon={faEllipsis} />
                        </div>
                    </div>
                )}
                {pageLyrics && (
                    <div className={cx('lyrics')}>
                        <div className={cx('lyrics-header')}>
                            <div className={cx('lyrics-logo')}></div>
                            <div className={cx('lyrics-title')}>
                                <p>Lời bài hát</p>
                            </div>
                            <div className={cx('lyrics-icon')} onClick={() => dispatch(setLyricPage(false))}>
                                <div className={cx('button-list')}>
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </div>
                            </div>
                        </div>
                        <div className={cx('lyrics-content')}>
                            <img className={cx('lyrics-content-img')} src={songState.song.thumbnailM} alt=""></img>
                            <div className={cx('lyrics-content-text')}>
                                <SongLyric audioPlayer={audioPlayer} />
                            </div>
                        </div>
                    </div>
                )}

                <div className={cx(!pageLyrics && 'action', pageLyrics && 'page_lyrics-action')}>
                    <div className={cx('button')}>
                        <Tippy content="Bật phát ngẫu nhiên">
                            <div className={cx('button-list', songState.random && 'active')} onClick={handleRandom}>
                                <RxShuffle className={cx('button-icon')} />
                            </div>
                        </Tippy>
                        <div className={cx('button-list')} onClick={handlePreSong}>
                            <RxTrackPrevious className={cx('button-icon')} />
                        </div>
                        {!songState.isPlay ? (
                            <div className={cx('button-list-play')} onClick={() => dispatch(play())}>
                                <RxPlay className={cx('button-icon-play')} />
                            </div>
                        ) : (
                            <div className={cx('button-list-pause')} onClick={() => dispatch(pause())}>
                                <RxPause className={cx('button-icon-pause')} />
                            </div>
                        )}
                        <div className={cx('button-list')} onClick={handleNextSong}>
                            <RxTrackNext className={cx('button-icon')} />
                        </div>
                        <Tippy content="Lặp lại bài hát">
                            <div className={cx('button-list', songState.loop && 'active')} onClick={handleRepeat}>
                                <RxLoop className={cx('button-icon')} />
                            </div>
                        </Tippy>
                    </div>
                    <div className={cx('range')}>
                        <span>{calculateTime(currentTime)}</span>
                        <input
                            ref={progressBar}
                            className={cx('progressBar')}
                            type={'range'}
                            defaultValue={0}
                            onChange={changeRange}
                            onMouseDown={() => setSeeking(true)}
                            onMouseUp={() => setSeeking(false)}
                        ></input>
                        <span>{songState.song && calculateTime(songState.song.duration)}</span>
                    </div>
                </div>
                {!pageLyrics && (
                    <div className={cx('more')}>
                        <div className={cx('more-wrapper')} onClick={() => dispatch(setLyricPage(true))}>
                            <TbMicrophone2 className={cx('more-icon')} />
                        </div>

                        {songState.muted === true || songState.volume === 0 ? (
                            <div
                                className={cx('more-wrapper')}
                                onClick={() => {
                                    dispatch(muted(false));
                                }}
                            >
                                <BsVolumeMute className={cx('more-icon')} />
                            </div>
                        ) : (
                            <div className={cx('more-wrapper')} onClick={handleMuted}>
                                <BsVolumeUp className={cx('more-icon')} />
                            </div>
                        )}
                        <div className={cx('more-volume')}>
                            <input
                                type={'range'}
                                className={cx('volume')}
                                min={0}
                                max={100}
                                step={1}
                                onChange={handleChangeVolume}
                                value={songState.volume * 100}
                            ></input>
                        </div>
                        <div className={cx('split')}></div>
                        <div className={cx('more-list')} onClick={onChangePlaylist}>
                            <RxListBullet className={cx('more-icon')} />
                        </div>
                    </div>
                )}
            </div>

            {small && (
                <div className={cx('small-audio')}>
                    <div className={cx('small-audio-content')}>
                        {!songState.isPlay ? (
                            <div className={cx('button-list-play')} onClick={() => dispatch(play())}>
                                <RxPlay className={cx('button-icon-play')} />
                            </div>
                        ) : (
                            <div className={cx('button-list-pause')} onClick={() => dispatch(pause())}>
                                <RxPause className={cx('button-icon-pause')} />
                            </div>
                        )}
                        <div className={cx('responsive-small')}>
                            <div className={cx('button-close')} onClick={() => setSmall(false)}>
                                <img className={cx('responsive-icon')} src={images.enlarge} alt=""></img>
                            </div>
                            <div className={cx('button-close')} onClick={handleClose}>
                                <CloseIcon className={cx('responsive-icon')} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AudioSong;
