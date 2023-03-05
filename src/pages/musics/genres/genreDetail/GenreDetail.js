import styles from './GenresDetail.module.scss';
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import musicApi from '~/api/music/musicApi';
import { setGenresDetail } from '~/slices/songSlice';
import SongConcept from '~/layouts/components/SongConcept';

const cx = classNames.bind(styles);
function GenreDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const genresDetail = useSelector((state) => state.song.genresDetail);
    useEffect(() => {
        musicApi.getGenreDetail(id).then((res) => dispatch(setGenresDetail(res.genresDetail)));
        // eslint-disable-next-line
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner')}>
                <img src={genresDetail && genresDetail.thumbnailHasText} alt="" className={cx('banner-img')}></img>
            </div>
            <div className={cx('header')}>
                {genresDetail && (
                    <SongConcept title={genresDetail.title} data={genresDetail.sections[0].items} details={true} />
                )}
            </div>
        </div>
    );
}

export default GenreDetail;
