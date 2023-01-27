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
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';

const cx = classNames.bind(styles);
function Audio() {
    const controllAudio = () => {};

    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                <img
                    alt=""
                    className={cx('info-img')}
                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/d/f/9/b/df9b187a2b0e565ebe5b6bd60bdef622.jpg"
                ></img>
                <div className={cx('info-song')}>
                    <p>Tòng phu</p>
                    <p>Keyo</p>
                </div>
                <div className={cx('info-icon')}>
                    <FontAwesomeIcon icon={faHeart} />
                </div>
                <div className={cx('info-icon')}>
                    <FontAwesomeIcon icon={faEllipsis} />
                </div>
            </div>
            <div className={cx('action')}>
                <div className={cx('button')}>
                    <Tippy content="Bật phát ngẫu nhiên">
                        <div className={cx('button-list')}>
                            <FontAwesomeIcon className={cx('button-icon')} icon={faShuffle} />
                        </div>
                    </Tippy>
                    <div className={cx('button-list')}>
                        <FontAwesomeIcon className={cx('button-icon')} icon={faBackwardStep} />
                    </div>
                    <div className={cx('button-list-play')}>
                        <FontAwesomeIcon className={cx('button-icon-play')} icon={faPlay} />
                    </div>
                    <div className={cx('button-list-pause')}>
                        <FontAwesomeIcon className={cx('button-icon-pause')} icon={faPause} />
                    </div>
                    <div className={cx('button-list')}>
                        <FontAwesomeIcon className={cx('button-icon')} icon={faForwardStep} />
                    </div>
                    <Tippy content="Bật phát lại tất cả">
                        <div className={cx('button-list')}>
                            <FontAwesomeIcon className={cx('button-icon')} icon={faRepeat} />
                        </div>
                    </Tippy>
                </div>
                <div className={cx('range')}>
                    <span> 00:00</span>
                    <input className={cx('input')} type={'range'}></input>
                    <span>04:15</span>
                </div>
            </div>
            <div className={cx('more')}>
                <div className={cx('more-wrapper')}>
                    <FontAwesomeIcon className={cx('more-icon')} icon={faMicrophone} />
                </div>
                <div className={cx('more-wrapper')}>
                    <FontAwesomeIcon className={cx('more-icon')} icon={faVolumeHigh} />
                </div>
                <div className={cx('more-volume')}>
                    <input type={'range'} className={cx('volume')}></input>
                </div>
                <div className={cx('split')}></div>
                <div className={cx('more-list')}>
                    <FontAwesomeIcon className={cx('more-icon')} icon={faList} />
                </div>
            </div>
        </div>
    );
}

export default Audio;
