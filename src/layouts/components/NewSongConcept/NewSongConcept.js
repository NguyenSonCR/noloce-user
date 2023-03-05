import styles from './NewSongConcept.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import PlaylistItem from '~/pages/musics/playlist/playlistItem';

const cx = classNames.bind(styles);
function NewSongConcept() {
    const songState = useSelector((state) => state.song);
    const [songs, setSongs] = useState(songState?.homeMusic?.find((item) => item.title === 'Mới phát hành').items.all);
    const [active, setActive] = useState(1);

    const onChangeTab = (id) => {
        if (id === 1) {
            setSongs(songState?.homeMusic?.find((item) => item.title === 'Mới phát hành').items.all);
            setActive(1);
        } else if (id === 2) {
            setSongs(songState?.homeMusic?.find((item) => item.title === 'Mới phát hành').items.vPop);
            setActive(2);
        } else {
            setSongs(songState?.homeMusic?.find((item) => item.title === 'Mới phát hành').items.others);
            setActive(3);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <p className={cx('header-title')}>Mới phát hành</p>
                <div className={cx('header-action')}>
                    <ul className={cx('tab')}>
                        <li className={cx('tab-item', active === 1 && 'active')} onClick={() => onChangeTab(1)}>
                            Tất cả
                        </li>
                        <li className={cx('tab-item', active === 2 && 'active')} onClick={() => onChangeTab(2)}>
                            Việt Nam
                        </li>
                        <li className={cx('tab-item', active === 3 && 'active')} onClick={() => onChangeTab(3)}>
                            Quốc tế
                        </li>
                    </ul>
                    <div className={cx('header-all')}>
                        <p>Tất cả</p>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>
            </div>
            <div className={cx(['row', 'sm-gutter'], 'container')}>
                <div className={cx(['col', 'l-4'])}>
                    <PlaylistItem songList={songs.slice(0, 4)} />
                </div>
                <div className={cx(['col', 'l-4'])}>
                    <PlaylistItem songList={songs.slice(4, 8)} />
                </div>
                <div className={cx(['col', 'l-4'])}>
                    <PlaylistItem songList={songs.slice(8, 12)} />
                </div>
            </div>
        </div>
    );
}

export default NewSongConcept;
