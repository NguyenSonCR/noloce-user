import styles from './Music.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import SongItem from '~/layouts/components/SongItem';
import Audio from '~/layouts/components/Audio';
import songs from '~/assets/songs';
import { useRef } from 'react';

const cx = classNames.bind(styles);
function Music() {
    const audio = useRef();
    console.log(audio);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('playlist')}>
                <div className={cx('playlist-header')}>
                    <span>Playlist</span>
                    <div className={cx('playlist-header-add')}>
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </div>
                <div className={cx('playlist-content')}></div>
            </div>
            <div className={cx('content')}>
                <ul className={cx('content-header')}>
                    <li className={cx('content-header-item')}>Bài hát</li>
                </ul>
                <ul className={cx('content-body')}>
                    <div className={cx('content-body__title')}>
                        <p className={cx('content-body__item')}>Bài hát</p>
                        <div className={cx('album')}>
                            <p className={cx('album__item')}>Album</p>
                            <p className={cx('album__item')}>Thời gian</p>
                        </div>
                    </div>
                    <SongItem />
                    <SongItem />
                    <SongItem />
                    <SongItem />
                    <SongItem />
                </ul>
            </div>
            <audio ref={audio}>
                <source src={songs.song1} type="audio/ogg" />
            </audio>
            <Audio />
        </div>
    );
}

export default Music;
