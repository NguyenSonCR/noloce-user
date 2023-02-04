import styles from './SongItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faMicrophone, faHeart, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useDispatch } from 'react-redux';
import { loadSong } from '~/slices/songSlice';
import songs from '~/assets/songs';

const cx = classNames.bind(styles);

function SongItem() {
    const dispatch = useDispatch();

    const [hover, setHover] = useState(false);
    const [choose, setChoose] = useState(false);
    const handleHover = () => {
        setHover(true);
    };

    const handleLeave = () => {
        if (!choose) {
            setHover(false);
        } else {
            setHover(true);
        }
    };

    const handleChoose = () => {
        if (choose) {
            setChoose(false);
        } else {
            setChoose(true);
        }
    };

    const handleSelectSong = () => {
        dispatch(
            loadSong({
                songId: 1,
                name: 'Đêm trăng tình yêu',
                author: 'Hải Băng',
                url: songs.song1,
                duration: '04:37',
                album: 'Tình yêu',
                img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/covers/6/2/62df066e6f9196dbeedadd35931b88ae_1382408334.jpg',
            }),
        );
    };

    return (
        <div
            className={cx('wrapper', hover && 'hover')}
            onMouseOver={handleHover}
            onMouseLeave={handleLeave}
            onClick={handleSelectSong}
        >
            <div className={cx('song')}>
                {!hover ? (
                    <FontAwesomeIcon className={cx('icon')} icon={faMusic} />
                ) : (
                    <input className={cx('input')} type={'checkbox'} onClick={handleChoose}></input>
                )}
                <div className={cx('info')}>
                    <img
                        className={cx('img')}
                        alt=""
                        src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/covers/6/2/62df066e6f9196dbeedadd35931b88ae_1382408334.jpg"
                    ></img>
                    <div className={cx('info-list')}>
                        <p className={cx('name')}>Đêm trăng tình yêu</p>
                        <p className={cx('author')}>Hải Băng</p>
                    </div>
                </div>
            </div>
            <div className={cx('album')}>
                <p> Tình yêu </p>
                {hover ? (
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
                ) : (
                    <p>04:37</p>
                )}
            </div>
        </div>
    );
}

export default SongItem;
