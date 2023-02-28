import classNames from 'classnames/bind';
import styles from './Details.module.scss';

import useFetch from '~/hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchDataFromApi } from '~/utils/api';
import { getApiConfiguration, getGenres } from '~/slices/homeSlice';

const cx = classNames.bind(styles);

function Details() {
    const dispatch = useDispatch();
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

    const { id } = useParams('');
    const { data } = useFetch(`/movie/${id}`);

    const homeWebState = useSelector((state) => state.homeWeb);
    const [img, setImg] = useState('');
    useEffect(() => {
        if (data) setImg(homeWebState.url.poster + data.backdrop_path);
        // eslint-disable-next-line
    }, [data]);

    let body = null;
    if (data) {
        body = (
            <div>
                <div className={cx('header')}>
                    <img src={img} className={cx('img')} alt=""></img>
                    <div>
                        <p>{data.title}</p>
                        <p>{data.overview}</p>
                    </div>
                </div>
            </div>
        );
    }
    return body;
}

export default Details;
