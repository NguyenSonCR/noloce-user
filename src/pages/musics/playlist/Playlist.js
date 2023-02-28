import classNames from 'classnames/bind';
import styles from './Playlist.module.scss';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import PlaylistItem from './playlistItem/PlaylistItem';

const cx = classNames.bind(styles);
function Playlist() {
    const songState = useSelector((state) => state.song);
    const [shouldRender, setRender] = useState(false);

    useEffect(() => {
        if (songState.playlist) {
            setRender(true);
        }
    }, [songState.playlist]);

    const handleonAnimationEnd = () => {
        if (!songState.playlist) setRender(false);
    };

    return (
        <div>
            {shouldRender && (
                <div
                    className={cx('wrapper')}
                    style={{ animation: `${songState.playlist ? 'fadeIn' : 'fadeOut'} 0.6s ease-in forwards` }}
                    onAnimationEnd={handleonAnimationEnd}
                >
                    <div className={cx('header')}>
                        <p className={cx('title')}>Danh sách đang phát</p>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('content-header')}>
                            <p>Tiếp theo</p>
                            <p>
                                Từ playlist
                                <span className={cx('text-album')}> {songState.album.title}</span>
                            </p>
                        </div>
                        <div className={cx('container')}>
                            <PlaylistItem songList={songState.album.song.items} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Playlist;
