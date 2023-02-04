import classNames from 'classnames/bind';
import styles from './Audio.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHeart,
    faEllipsis,
    faShuffle,
    faPlay,
    faPause,
    faForwardStep,
    faRepeat,
    faBackwardStep,
    faMicrophone,
    faVolumeHigh,
    faList,
    faVolumeXmark,
    faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';

import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { play, pause, progress, duration, volume, muted, currentTime, seek, loop, random } from '~/slices/songSlice';
const cx = classNames.bind(styles);
function Audio() {
    const songState = useSelector((state) => state.song);
    const [pageLyrics, setPageLyrics] = useState(false);
    const dispatch = useDispatch();
    const audio = useRef();

    const handleSeek = (event) => {
        dispatch(progress(event.target.value));
        const currentTimeSong = (event.target.value * audio.current.duration) / 1000;
        dispatch(currentTime(currentTimeSong));
    };

    useEffect(() => {
        if (songState.muted) {
            audio.current.volume = 0.0;
        } else {
            audio.current.volume = songState.volume;
        }
    }, [songState.isPlay, songState.volume, songState.muted]);

    const playSong = () => {
        audio.current.play();
        dispatch(play());
    };
    const pauseSong = () => {
        audio.current.pause();
        dispatch(pause());
    };

    // handle when play song
    const handleAudioPlay = () => {
        const progressSong = Math.floor((audio.current.currentTime / audio.current.duration) * 1000);
        if (!songState.seek) dispatch(progress(progressSong));
        const minute = Math.floor(audio.current.currentTime / 60);
        const second =
            Math.round(audio.current.currentTime % 60) < 10
                ? '0' + Math.round(audio.current.currentTime % 60)
                : Math.round(audio.current.currentTime % 60);

        const durationSong = `0${minute}:${second}`;
        dispatch(duration(durationSong));
    };

    const handleMuted = () => {
        dispatch(muted(true));
    };

    const handleChangeVolume = (event) => {
        dispatch(volume(event.target.value / 100));
    };

    const handleEnd = () => {
        dispatch(pause());
    };

    useEffect(() => {
        if (songState.loop) {
            audio.current.loop = true;
        } else {
            audio.current.loop = false;
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

    return (
        <div className={cx(!pageLyrics && 'wrapper', pageLyrics && 'page_lyrics')}>
            {!pageLyrics && (
                <div className={cx('info')}>
                    <img alt="" className={cx('info-img')} src={songState.song && songState.song.img}></img>
                    <div className={cx('info-song')}>
                        <p>{songState.song && songState.song.name}</p>
                        <p>{songState.song && songState.song.author}</p>
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
                        <div className={cx('lyrics-icon')} onClick={() => setPageLyrics(false)}>
                            <div className={cx('button-list')}>
                                <FontAwesomeIcon icon={faChevronDown} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('lyrics-content')}>
                        <img className={cx('lyrics-content-img')} src={songState.song.img} alt=""></img>
                        <div className={cx('lyrics-content-text')}>
                            <p>
                                Chiều một mình trên phố năm xưa Lạc bước giữa đêm đông người. Rồi một ngày anh bỗng đi
                                qua Sưởi ấm con tim lẻ loi. Nụ cười và ánh mắt đam mê Trái tim đôi ta không rời. Con
                                thuyền không còn xa bến Con thuyền không còn theo sóng mãi xa mù khơi. Lòng ngập ngừng
                                nói tiếng yêu anh Tình yêu ấy thiết tha chân thành. Còn gì́ bằng sánh bước bên nhau Cùng
                                ngắm ánh trăng và ngàn sao. Cuộc tình ngọt ngào anh đã trao em Làm trái tim em đổi thay
                                Niềm hạnh phúc em đang có anh Khiến em ngỡ ngàng. Phố xa đêm đông người đêm tình yêu
                                dưới trăng Thấp thoáng bao đôi nhân tình đang đùa vui đắm say. Cành hồng trao tay đến
                                tay, Rộn ràng nghe tim ngất ngây. T́ình này trao anh thề mãi không bao giờ phai. Ước chi
                                trăng đừng tàn soi tình yêu chúng ta Những ánh sao băng qua trời xin lặng im lung linh
                                Th́ì thầm em nói với anh một lời Anh có biết được trái tim em yêu ḿình anh. Lòng ngập
                                ngừng nói tiếng yêu anh Tình yêu ấy thiết tha chân thành. Còn gì́ bằng sánh bước bên nhau
                                Cùng ngắm ánh trăng và ngàn sao. Cuộc tình ngọt ngào anh đã trao em Làm trái tim em đổi
                                thay Niềm hạnh phúc em đang có anh Khiến em ngỡ ngàng. Phố xa đêm đông người đêm tình
                                yêu dưới trăng Thấp thoáng bao đôi nhân tình đang đùa vui đắm say. Cành hồng trao tay
                                đến tay, Rộn ràng nghe tim ngất ngây. T́ình này trao anh thề mãi không bao giờ phai. Ước
                                chi trăng đừng tàn soi tình yêu chúng ta Những ánh sao băng qua trời xin lặng im lung
                                linh Th́ì thầm em nói với anh một lời Anh có biết được trái tim em yêu ḿình anh. Anh có
                                biết được trái tim..... em yêu ..... anh.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <div className={cx(!pageLyrics && 'action', pageLyrics && 'page_lyrics-action')}>
                <div className={cx('button')}>
                    <Tippy content="Bật phát ngẫu nhiên">
                        <div className={cx('button-list', songState.random && 'active')} onClick={handleRandom}>
                            <FontAwesomeIcon className={cx('button-icon')} icon={faShuffle} />
                        </div>
                    </Tippy>
                    <div className={cx('button-list')}>
                        <FontAwesomeIcon className={cx('button-icon')} icon={faBackwardStep} />
                    </div>
                    {!songState.isPlay ? (
                        <div className={cx('button-list-play')} onClick={() => playSong()}>
                            <FontAwesomeIcon className={cx('button-icon-play')} icon={faPlay} />
                        </div>
                    ) : (
                        <div className={cx('button-list-pause')} onClick={() => pauseSong()}>
                            <FontAwesomeIcon className={cx('button-icon-pause')} icon={faPause} />
                        </div>
                    )}
                    <div className={cx('button-list')}>
                        <FontAwesomeIcon className={cx('button-icon')} icon={faForwardStep} />
                    </div>
                    <Tippy content="Lặp lại bài hát">
                        <div className={cx('button-list', songState.loop && 'active')} onClick={handleRepeat}>
                            <FontAwesomeIcon className={cx('button-icon')} icon={faRepeat} />
                        </div>
                    </Tippy>
                </div>
                <div className={cx('range')}>
                    <span>{songState.duration}</span>
                    <input
                        className={cx('input')}
                        type={'range'}
                        value={songState.progress}
                        min={0}
                        max={1000}
                        step={1}
                        onChange={handleSeek}
                        onMouseDown={() => {
                            dispatch(seek(true));
                        }}
                        onMouseUp={() => {
                            dispatch(seek(false));
                            audio.current.currentTime = songState.currentTime;
                        }}
                    ></input>
                    <span>{songState.song.duration}</span>
                </div>
            </div>
            {!pageLyrics && (
                <div className={cx('more')}>
                    <div className={cx('more-wrapper')} onClick={() => setPageLyrics(true)}>
                        <FontAwesomeIcon className={cx('more-icon')} icon={faMicrophone} />
                    </div>

                    {songState.muted === true || songState.volume === 0 ? (
                        <div
                            className={cx('more-wrapper')}
                            onClick={() => {
                                dispatch(muted(false));
                            }}
                        >
                            <FontAwesomeIcon className={cx('more-icon')} icon={faVolumeXmark} />
                        </div>
                    ) : (
                        <div className={cx('more-wrapper')} onClick={handleMuted}>
                            <FontAwesomeIcon className={cx('more-icon')} icon={faVolumeHigh} />
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
                    <div className={cx('more-list')}>
                        <FontAwesomeIcon className={cx('more-icon')} icon={faList} />
                    </div>
                </div>
            )}

            <audio
                ref={audio}
                src={songState.song && songState.song.url}
                onTimeUpdate={handleAudioPlay}
                onEnded={handleEnd}
            />
        </div>
    );
}

export default Audio;
