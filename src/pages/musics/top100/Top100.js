import styles from './Top100.module.scss';
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import SongConcept from '~/layouts/components/SongConcept';
import musicApi from '~/api/music/musicApi';
import { useDispatch, useSelector } from 'react-redux';
import { setTop100 } from '~/slices/songSlice';
import Loading from '~/layouts/components/Loading';

const cx = classNames.bind(styles);
function Top100() {
    const dispatch = useDispatch();
    const songState = useSelector((state) => state.song);
    useEffect(() => {
        if (!songState.top100) {
            musicApi.getTop100Zing().then((response) => {
                dispatch(setTop100(response.data));
            });
        }
        // eslint-disable-next-line
    }, []);

    let body = null;
    if (!songState.top100) {
        body = (
            <div className={cx('loading-wrapper')}>
                <Loading />
                <Loading />
                <Loading />
                <Loading />
                <Loading />
                <Loading />
                <Loading />
                <Loading />
            </div>
        );
    }
    if (songState.top100) {
        body = (
            <div className={cx('wrapper')}>
                {songState.top100.map((item, index) => (
                    <SongConcept key={index} title={item.genre.name} data={item} all={false} />
                ))}
            </div>
        );
    }
    return body;
}

export default Top100;
