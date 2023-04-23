import styles from './Genres.module.scss';
import classNames from 'classnames/bind';
import GenresConcept from './genresConcept/GenresConcept';
import musicApi from '~/api/music/musicApi';
import { useEffect } from 'react';
import { setGenres } from '~/slices/songSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '~/layouts/components/Loading';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Genres() {
    const genres = useSelector((state) => state.song.genres);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (!genres) {
            musicApi.getGenres().then((res) => {
                dispatch(setGenres(res.genres));
            });
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('back')}>
                <IoIosArrowRoundBack
                    className={cx('back-btn')}
                    onClick={() => {
                        navigate(-1);
                    }}
                />
                <p className={cx('text')}>Thể loại</p>
            </div>
            {genres ? (
                <GenresConcept title={'Tâm trạng và hoạt động'} data={genres.topic} genres={true} />
            ) : (
                <Loading />
            )}
            <div className={cx('genres')}>
                {genres ? (
                    genres.genre.map((item, index) => (
                        <GenresConcept
                            key={index}
                            title={item.title}
                            data={item.playlists.slice(0, 5)}
                            genres={false}
                        />
                    ))
                ) : (
                    <Loading />
                )}
            </div>
        </div>
    );
}

export default Genres;
