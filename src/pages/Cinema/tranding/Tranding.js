import classNames from 'classnames/bind';
import styles from './Tranding.module.scss';
import useFetch from '~/hooks/useFetch';
import images from '~/assets/img';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
function Tranding() {
    const { data } = useFetch('/movie/top_rated');
    const homeWebState = useSelector((state) => state.homeWeb);

    const navigate = useNavigate();
    const handleSelectMovie = (item) => {
        navigate(`/cinema/movie/${item.id}`);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx(['row'])}>
                {data?.results?.map((item, index) => {
                    console.log(item);
                    const url = item.poster_path ? homeWebState.url.poster + item.poster_path : images.fallback;
                    return (
                        <div
                            key={index}
                            className={cx('movie-item', ['col', 'l-4', 'm-4'])}
                            onClick={() => handleSelectMovie(item)}
                        >
                            <div className={cx('img')}>
                                <img src={url} alt="" className={cx('img-tag')}></img>
                            </div>
                            <div className={cx('text-block')}>
                                <span>{item.title || item.name}</span>
                            </div>
                            <div className={cx('day-block')}>
                                <span>{dayjs(item.release_date).format('MMM D, YYYY')}</span>
                            </div>
                            {item.genre_ids.map((g, index) => (
                                <div key={index}>
                                    <span>{homeWebState?.genres[g]?.name}</span>
                                </div>
                            ))}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Tranding;
