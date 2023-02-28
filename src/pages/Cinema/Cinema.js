import classNames from 'classnames/bind';
import styles from './Cinema.module.scss';

import { useEffect, useState } from 'react';
import { fetchDataFromApi } from '~/utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { getApiConfiguration, getGenres } from '~/slices/homeSlice';
import useFetch from '~/hooks/useFetch';
import Tranding from './tranding/Tranding';
import images from '~/assets/img';
import Genres from './genres/Genres';

const cx = classNames.bind(styles);
function Cinema() {
    const dispatch = useDispatch();
    const homeWebState = useSelector((state) => state.homeWeb);
    const [background, setBackgound] = useState(images.fallback);
    const { data } = useFetch('/movie/upcoming');

    useEffect(() => {
        if (data) {
            const bg = homeWebState.url.profile + data.results[Math.floor(Math.random() * 20)].backdrop_path;
            setBackgound(bg);
        }
        // eslint-disable-next-line
    }, [data]);

    const fetchApiConfig = () => {
        fetchDataFromApi('/configuration').then((res) => {
            const url = {
                backgrop: res.images.secure_base_url + 'original',
                poster: res.images.secure_base_url + 'original',
                profile: res.images.secure_base_url + 'original',
            };
            dispatch(getApiConfiguration(url));
        });
    };

    const fetchApiGenres = () => {
        fetchDataFromApi('/genre/movie/list').then((res) => {
            const allGenres = {};
            res.genres.map((item) => (allGenres[item.id] = item));
            dispatch(getGenres(allGenres));
        });
    };
    useEffect(() => {
        fetchApiConfig();
        fetchApiGenres();
        // eslint-disable-next-line
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner')}>
                <img src={background} alt="" className={cx('banner-img')}></img>
            </div>
            <Tranding />
            <Genres />
        </div>
    );
}

export default Cinema;
