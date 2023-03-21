import PlaylistItem from '~/pages/musics/playlist/PlaylistItem/PlaylistItem';
import styles from './NewSongRelease.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function NewSongRelease({ concept, link }) {
    return (
        <div className={cx('content')}>
            <div className={cx('content-header')}>
                <p>{concept.title}</p>
                <Link to={link} className={cx('content-header-all')}>
                    <p>Tất cả</p>
                    <FontAwesomeIcon icon={faChevronRight} />
                </Link>
            </div>
            <div>
                <div className={cx(['row', 'sm-gutter'], 'container')}>
                    <div className={cx(['col', 'l-12'])}>
                        <PlaylistItem songList={concept.items} playlist={concept.items} scroll={true} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewSongRelease;
