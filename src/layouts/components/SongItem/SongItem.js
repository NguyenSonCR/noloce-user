import styles from './SongItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faMicrophone, faHeart, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);

function SongItem() {
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

    return (
        <div className={cx('wrapper', hover && 'hover')} onMouseOver={handleHover} onMouseLeave={handleLeave}>
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
                        src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/d/f/9/b/df9b187a2b0e565ebe5b6bd60bdef622.jpg"
                    ></img>
                    <div className={cx('info-list')}>
                        <p className={cx('name')}>Tòng phu</p>
                        <p className={cx('author')}>Keyo</p>
                    </div>
                </div>
            </div>
            <div className={cx('album')}>
                <p>Tòng phu (Single)</p>
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
                    <p>04:55</p>
                )}
            </div>
        </div>
    );
}

export default SongItem;
