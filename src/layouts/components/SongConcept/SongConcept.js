import styles from './SongConcept.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faPlay } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/img';

const cx = classNames.bind(styles);
function SongConcept({ title, data }) {
    return (
        <div className={cx('content')}>
            <div className={cx('content-header')}>
                <p>{title}</p>
                <div className={cx('content-header-all')}>
                    <p>Tất cả</p>
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
            <div className={cx('content-song')}>
                <div className="grid wide">
                    <div className={cx(['row', 'sm-gutter'])}>
                        <div className="col l-2">
                            <div className={cx('song-list')}>
                                <div className={cx('song-img')}>
                                    <img alt="" src={images.song} className={cx('img-content')}></img>
                                    <div className={cx('overlay')}>
                                        <div className={cx('overplay-wrapper')}>
                                            <FontAwesomeIcon className={cx('overlay-icon')} icon={faPlay} />
                                        </div>
                                    </div>
                                </div>

                                <p className={cx('song-name')}>Đêm trăng tình yêu</p>
                                <p className={cx('song-author')}>Hải Băng</p>
                            </div>
                        </div>
                        <div className="col l-2">
                            <div className={cx('song-list')}>
                                <div className={cx('song-img')}>
                                    <img alt="" src={images.song} className={cx('img-content')}></img>
                                    <div className={cx('overlay')}>
                                        <div className={cx('overplay-wrapper')}>
                                            <FontAwesomeIcon className={cx('overlay-icon')} icon={faPlay} />
                                        </div>
                                    </div>
                                </div>

                                <p className={cx('song-name')}>Đêm trăng tình yêu</p>
                                <p className={cx('song-author')}>Hải Băng</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SongConcept;
