import styles from './HomeMusic.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faPlay } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/img';
import SongConcept from '~/layouts/components/SongConcept';

const cx = classNames.bind(styles);
function HomeMusic() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('slider')}>
                <div className={cx('song-slider')}>
                    <div className={cx('button')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faChevronLeft} />
                    </div>
                    <div className={cx('img-wrapper')}>
                        <img className={cx('img')} src={images.song} alt=""></img>
                    </div>
                    <div className={cx('img-wrapper')}>
                        <img className={cx('img')} src={images.song} alt=""></img>
                    </div>
                    <div className={cx('img-wrapper')}>
                        <img className={cx('img')} src={images.song} alt=""></img>
                    </div>

                    <div className={cx('button-right')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faChevronRight} />
                    </div>
                </div>
            </div>

            <SongConcept title={'Mới phát hành'} />
            <SongConcept title={'Nhạc dành cho bạn'} />
            <SongConcept title={'Top 100'} />
        </div>
    );
}

export default HomeMusic;
