import PlaylistItem from '~/pages/musics/playlist/playlistItem/PlaylistItem';
import styles from './NewSongRelease.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function NewSongRelease({ concept }) {
    return (
        <div className={cx('content')}>
            <div className={cx('content-header')}>
                <p>{concept.title}</p>
                <div className={cx('content-header-all')}>
                    <p>Tất cả</p>
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
            <div>
                <div className={cx(['row', 'sm-gutter'], 'container')}>
                    <div className={cx(['col', 'l-12'])}>
                        <PlaylistItem songList={concept.items} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewSongRelease;
