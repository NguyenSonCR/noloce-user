import classNames from 'classnames/bind';
import styles from './AudioMobile.module.scss';
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
    loop,
    random,
    mounted,
    loadSong,
    setPlaylist,
    setSongLyric,
    setLink,
    setVipSong,
} from '~/slices/songSlice';
import images from '~/assets/img';
import { RxTrackNext, RxTrackPrevious, RxPause, RxPlay, RxShuffle, RxLoop } from 'react-icons/rx';
import { FaSpinner } from 'react-icons/fa';
import musicApi from '~/api/music/musicApi';
import SongLyric from '~/layouts/components/SongLyric';
import { addToast } from '~/slices/toastSlice';
import axios from 'axios';
import PlaylistItem from '~/pages/musics/playlist/PlaylistItem';

const cx = classNames.bind(styles);
function AudioSong({ container }) {
    // get store redux
    const songState = useSelector((state) => state.song);
    const toastState = useSelector((state) => state.toast);

    const dispatch = useDispatch();

    // state
    const [small, setSmall] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [seeking, setSeeking] = useState(false);
    const [loading, setLoading] = useState(false);
    // references
    const audioPlayer = useRef(); // reference our audio component
    const progressBar = useRef(); // reference our progress bar
    const animationRef = useRef(); // reference the animation currenttime
    const progressRef = useRef(); // reference the animation progress
    const imgRef = useRef();
    const imgAnimate = useRef;

    // setting step
    const step = 1;

    const [tab, setTab] = useState(2);

    // useEffect
    // play and pause
    useEffect(() => {
        if (songState.link.link === null) return;
        if (songState.isPlay === false) {
            audioPlayer.current.pause();
            cancelAnimationFrame(progressRef.current);
            cancelAnimationFrame(animationRef.current);
            if (imgAnimate.current) imgAnimate.current.pause();
            return;
        }
        if (songState.isPlay) {
            const playPromise = audioPlayer.current.play();
            if (playPromise !== undefined) {
                playPromise
                    .then((_) => {
                        animationRef.current = requestAnimationFrame(whilePlaying);
                        progressRef.current = requestAnimationFrame(whileSeeking);
                        if (imgAnimate.current) imgAnimate.current.play();
                        audioPlayer.current.onended = () => {
                            handleOnEnded();
                        };
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        }
        // eslint-disable-next-line
    }, [songState.isPlay]);

    // change song
    useEffect(() => {
        if (songState.link.link === null || songState.song.encodeId !== songState.link.songId) return;
        if (songState.song.encodeId === songState.link.songId)
            if (songState.isPlay && audioPlayer?.current?.paused === false) {
                audioPlayer.current.pause();
                if (songState.song.encodeId === songState.link.songId) {
                    audioPlayer.current = new Audio(songState.link.link);
                    setLoading(false);
                    const playPromise = audioPlayer.current.play();
                    if (playPromise !== undefined) {
                        playPromise
                            .then((_) => {
                                animationRef.current = requestAnimationFrame(whilePlaying);
                                progressRef.current = requestAnimationFrame(whileSeeking);
                                if (imgAnimate.current) imgAnimate.current.play();
                                audioPlayer.current.onended = () => {
                                    handleOnEnded();
                                };
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    }
                }
            } else if (songState.isPlay && audioPlayer?.current?.paused === true) {
                if (songState.song.encodeId === songState.link.songId) {
                    audioPlayer.current = new Audio(songState.link.link);
                    setLoading(false);
                    const playPromise = audioPlayer.current.play();
                    if (playPromise !== undefined) {
                        playPromise
                            .then((_) => {
                                animationRef.current = requestAnimationFrame(whilePlaying);
                                progressRef.current = requestAnimationFrame(whileSeeking);
                                if (imgAnimate.current) imgAnimate.current.play();
                                audioPlayer.current.onended = () => {
                                    handleOnEnded();
                                };
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    }
                }
            } else if (songState.isPlay === false) {
                audioPlayer.current = new Audio(songState.link.link);
                setLoading(false);
            }
        // eslint-disable-next-line
    }, [songState.link]);

    // set current time and progress
    useEffect(() => {
        if (audioPlayer?.current?.paused === false) {
            progressBar.current.max = songState.song.duration * step;
            setLoading(true);
            audioPlayer.current.pause();
            audioPlayer.current.currentTime = 0;
        } else {
            progressBar.current.max = songState.song.duration * step;
            audioPlayer.current.currentTime = 0;
            setLoading(true);
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
        // eslint-disable-next-line
    }, [songState.isPlay, songState.volume, songState.muted]);

    useEffect(() => {
        if (songState.vipSong) {
            handleNextSong();
        }
        // eslint-disable-next-line
    }, [songState.vipSong, toastState.toastList]);

    // loop
    useEffect(() => {
        if (songState.loop) {
            audioPlayer.current.loop = true;
        } else {
            audioPlayer.current.loop = false;
        }
        // eslint-disable-next-line
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
        dispatch(setPlaylist(false));
        dispatch(mounted());
    };

    const convertTimeToNumber = (string) => {
        const minutes = string.slice(1, 2);
        const seconds = string.slice(3, 9);
        const value = Math.round(Number(minutes) * 60 * 1000 + Math.round(Number(seconds) * 1000));
        return value;
    };

    const handleAsyncFunctionSong = (songId) => {
        const linkPromise = musicApi.getSong(songState.albumPlaying.playlist[songId].encodeId);
        const fileLyricPromise = musicApi.getLyricSong(songState.albumPlaying.playlist[songId].encodeId);

        Promise.all([linkPromise, fileLyricPromise])
            .then((response) => {
                if (response[0].success) {
                    dispatch(
                        setLink({
                            link: response[0].data['128'],
                            songId: response[0].info.encodeId,
                        }),
                    );
                    dispatch(setVipSong(false));
                } else {
                    dispatch(
                        addToast({
                            id: toastState.toastList.length + 1,
                            content: response[0].message,
                            type: 'warning',
                        }),
                    );
                    dispatch(setVipSong(true));
                }
                if (response[1].lyric.file && response[0].success) {
                    const lyricPromise = axios.get(response[1].lyric.file, {
                        headers: {
                            'content-type': 'application/octet-stream',
                        },
                    });

                    lyricPromise
                        .then((lyric) => {
                            const array = lyric.data.split('\n');
                            const array1 = array.map((line) => {
                                return {
                                    startTime: convertTimeToNumber(line.slice(1, 9)),
                                    words: line.slice(10, line.length),
                                };
                            });
                            dispatch(
                                setSongLyric({ lyric: array1, songId: response[0].info.encodeId, noLyric: false }),
                            );
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                } else {
                    dispatch(
                        setSongLyric({
                            lyric: null,
                            songId: null,
                            noLyric: true,
                        }),
                    );
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleShuffleSong = async () => {
        try {
            const randomId = Math.floor(Math.random() * songState.albumPlaying.playlist.length);
            dispatch(loadSong(songState.albumPlaying.playlist[randomId]));
            handleAsyncFunctionSong(randomId);
        } catch (error) {
            console.log(error);
        }
    };

    const index = songState?.albumPlaying?.playlist?.findIndex((song) => song.encodeId === songState.song.encodeId);
    const handleNextSong = async () => {
        if (songState.random) {
            handleShuffleSong();
        } else {
            try {
                if (index === songState.albumPlaying.playlist.length - 1) {
                    dispatch(loadSong(songState.albumPlaying.playlist[0]));
                    handleAsyncFunctionSong(0);
                } else {
                    const songId = index + 1;
                    dispatch(loadSong(songState.albumPlaying.playlist[songId]));
                    handleAsyncFunctionSong(songId);
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
                    const songId = songState.albumPlaying.playlist.length - 1;
                    dispatch(loadSong(songState.albumPlaying.playlist[songId]));
                    handleAsyncFunctionSong(songId);
                } else {
                    const songId = index - 1;
                    dispatch(loadSong(songState.albumPlaying.playlist[songId]));
                    handleAsyncFunctionSong(songId);
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

    // next song
    const handleOnEnded = () => {
        if (songState.loop) {
            handleLoopSong();
        } else if (songState.random) {
            handleShuffleSong();
        } else {
            handleNextSong();
        }
    };

    // drag
    const smallAudioRef = useRef();
    var active = false;
    var currentX;
    var currentY;
    var initialX;
    var initialY;
    const xOffset = useRef();
    const yOffset = useRef();

    useEffect(() => {
        xOffset.current = 0;
        yOffset.current = 0;
    }, [small]);

    container?.addEventListener('touchstart', dragStart);
    container?.addEventListener('touchend', dragEnd);
    container?.addEventListener('touchmove', drag);

    container?.addEventListener('mousedown', dragStart);
    container?.addEventListener('mouseup', dragEnd);
    container?.addEventListener('mousemove', drag);

    function dragStart(e) {
        if (e.type === 'touchstart') {
            initialX = e.touches[0].clientX - xOffset.current;
            initialY = e.touches[0].clientY - yOffset.current;
        } else {
            initialX = e.clientX - xOffset.current;
            initialY = e.clientY - yOffset.current;
        }

        if (e.target === smallAudioRef?.current) {
            active = true;
        }
    }

    function dragEnd(e) {
        initialX = currentX;
        initialY = currentY;
        active = false;
    }

    function drag(e) {
        if (active) {
            e.preventDefault();

            if (e.type === 'touchmove') {
                currentX = e.touches[0].clientX - initialX;
                currentY = e.touches[0].clientY - initialY;
            } else {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
            }

            xOffset.current = currentX;
            yOffset.current = currentY;

            setTranslate(currentX, currentY, smallAudioRef.current);
        }
    }

    function setTranslate(xPos, yPos, el) {
        el.style.transform = 'translate3d(' + xPos + 'px, ' + yPos + 'px, 0)';
    }

    // rotate cd
    useEffect(() => {
        if (imgRef.current) {
            imgAnimate.current = imgRef.current.animate(
                [
                    {
                        transform: 'rotate(0)',
                    },
                    {
                        transform: 'rotate(359deg)',
                    },
                ],
                {
                    duration: 30000,
                    iterations: Infinity,
                },
            );
        }
        if (imgAnimate.current) imgAnimate.current.pause();
        // eslint-disable-next-line
    }, [imgRef.current, songState.song]);

    if (small) {
        document.body.classList.remove('model');
    } else {
        document.body.classList.add('model');
    }

    return (
        <div className={cx(!songState.mounted && 'show')}>
            <div className={cx('wrapper', small && 'small')}>
                <audio id="audio" src={songState.link} ref={audioPlayer} preload={'metadata'}></audio>
                <div className={cx('body')}>
                    <div className={cx('header')}>
                        <div className={cx('header-tab')}>
                            <p className={cx('header-item', tab === 1 && 'active')} onClick={() => setTab(1)}>
                                Playlist
                            </p>
                            <p className={cx('header-item', tab === 2 && 'active')} onClick={() => setTab(2)}>
                                Bài hát
                            </p>
                            <p className={cx('header-item', tab === 3 && 'active')} onClick={() => setTab(3)}>
                                Lời bài hát
                            </p>
                        </div>
                        <div
                            className={cx('header-icon')}
                            onClick={() => {
                                setSmall(true);
                            }}
                        >
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                    </div>
                    <img
                        ref={imgRef}
                        className={cx('song-img', tab === 2 && 'active')}
                        src={songState.song.thumbnailM.replace('w240_r1x1_jpeg', 'w480_r1x1_webp')}
                        alt=""
                    ></img>

                    {tab === 2 ? (
                        <div className={cx('song')}>
                            <div className={cx('song-info')}>
                                <div className={cx('info-icon')}>
                                    <FontAwesomeIcon icon={faEllipsis} />
                                </div>
                                <div className={cx('info-song')}>
                                    <p>{songState.song && songState.song.title}</p>
                                    <p>{songState.song && songState.song.artistNames}</p>
                                </div>
                                <div className={cx('info-icon')}>
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                            </div>
                        </div>
                    ) : tab === 1 ? (
                        <div className={cx('playlist')}>
                            <div className={cx('playlist-header')}>
                                <p>
                                    Đang phát từ playlist:{' '}
                                    <span className={cx('text-album')}>
                                        {songState.albumPlaying && songState.albumPlaying.title}
                                    </span>
                                </p>
                            </div>
                            <div className={cx('playlist-body')}>
                                {songState.albumPlaying && <PlaylistItem songList={songState.albumPlaying.playlist} />}
                            </div>
                        </div>
                    ) : (
                        <div className={cx('lyric')}>
                            <SongLyric currentTime={audioPlayer.current.currentTime} loading={loading} />
                        </div>
                    )}

                    <div className={cx('footer')}>
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
                        <div className={cx('action', 'large')}>
                            <div className={cx('button')}>
                                <Tippy content="Bật phát ngẫu nhiên">
                                    <div
                                        className={cx('button-list', songState.random && 'active')}
                                        onClick={handleRandom}
                                    >
                                        <RxShuffle className={cx('button-icon')} />
                                    </div>
                                </Tippy>
                                <div className={cx('button-list')} onClick={handlePreSong}>
                                    <RxTrackPrevious className={cx('button-icon')} />
                                </div>

                                {loading === true ? (
                                    <div className={cx('button-list-play')} onClick={() => dispatch(play())}>
                                        <FaSpinner className={cx('button-icon-load')} />
                                    </div>
                                ) : songState.isPlay === false ? (
                                    <div className={cx('button-list-play')} onClick={() => dispatch(play())}>
                                        <RxPlay className={cx('button-icon-play')} />
                                    </div>
                                ) : (
                                    <div className={cx('button-list-pause')} onClick={() => dispatch(pause())}>
                                        <RxPause className={cx('button-icon-pause')} />
                                    </div>
                                )}

                                <div
                                    className={cx('button-list')}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        handleNextSong();
                                    }}
                                >
                                    <RxTrackNext className={cx('button-icon')} />
                                </div>
                                <Tippy content="Lặp lại bài hát">
                                    <div
                                        className={cx('button-list', songState.loop && 'active')}
                                        onClick={handleRepeat}
                                    >
                                        <RxLoop className={cx('button-icon')} />
                                    </div>
                                </Tippy>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {small && (
                <div className={cx('small-audio')} ref={smallAudioRef}>
                    {!songState.isPlay ? (
                        <div
                            className={cx('button-list-play')}
                            onClick={() => {
                                dispatch(play());
                            }}
                        >
                            <RxPlay className={cx('button-icon-play')} />
                        </div>
                    ) : (
                        <div
                            className={cx('button-list-pause')}
                            onClick={() => {
                                dispatch(pause());
                            }}
                        >
                            <RxPause className={cx('button-icon-pause')} />
                        </div>
                    )}
                    <div className={cx('responsive-small')}>
                        <div
                            className={cx('button-close')}
                            onClick={() => {
                                dispatch(setPlaylist(false));
                                setSmall(false);
                            }}
                        >
                            <img className={cx('responsive-icon')} src={images.enlarge} alt=""></img>
                        </div>
                        <div
                            className={cx('button-close')}
                            onClick={() => {
                                handleClose();
                            }}
                        >
                            <CloseIcon className={cx('responsive-icon')} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AudioSong;
