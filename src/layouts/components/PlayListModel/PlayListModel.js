import styles from './PlayList.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/img';

const cx = classNames.bind(styles);

function PlayList() {
    return (
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

                            <p className={cx('song-name')}>Nhạc êm đềm</p>
                            <p className={cx('song-author')}>Nguyễn sơn</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayList;
