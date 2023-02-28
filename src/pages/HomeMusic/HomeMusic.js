import styles from './HomeMusic.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/img';
import SongConcept from '~/layouts/components/SongConcept';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import musicApi from '~/api/music/musicApi';
import { setHomeMusic, getTop100 } from '~/slices/songSlice';

const cx = classNames.bind(styles);
function HomeMusic() {
    const songState = useSelector((state) => state.song);
    const dispatch = useDispatch();
    useEffect(() => {
        musicApi.getTop100Zing().then((response) => {
            if (response.success) {
                dispatch(getTop100(response.data));
            }
        });
        musicApi.getHome().then((response) => {
            if (response.success) {
                dispatch(setHomeMusic(response.homeData));
            }
        });
        // eslint-disable-next-line
    }, []);

    console.log(songState.HomeMusic);
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
            <div>
                {songState.top100 &&
                    songState.top100.map((item, index) => (
                        <SongConcept key={index} title={item.genre.name} data={item} />
                    ))}
            </div>
        </div>
    );
}

export default HomeMusic;
