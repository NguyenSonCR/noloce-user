import styles from './HomeMusic.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import SongConcept from '~/layouts/components/SongConcept';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import musicApi from '~/api/music/musicApi';
import { setHomeMusic, setTop100, loadSong } from '~/slices/songSlice';
import { useNavigate } from 'react-router-dom';
import Loading from '~/layouts/components/Loading';
import NewSongConcept from '~/layouts/components/NewSongConcept';
import NewSongRelease from '~/layouts/components/NewSongRelease';

const cx = classNames.bind(styles);
function HomeMusic() {
    const songState = useSelector((state) => state.song);
    const dispatch = useDispatch();
    useEffect(() => {
        musicApi.getTop100Zing().then((response) => {
            if (response.success) {
                dispatch(setTop100(response.data));
            }
        });
        musicApi.getHome().then((response) => {
            if (response.success) {
                dispatch(setHomeMusic(response.homeData.items));
                setSongSlider(response.homeData.items[0].items.slice(0, 3));
                setArray([
                    ...response.homeData.items[0].items,
                    response.homeData.items[0].items[0],
                    response.homeData.items[0].items[1],
                ]);
            }
        });
        // eslint-disable-next-line
    }, []);

    // slider
    const [array, setArray] = useState();
    const [index, setIndex] = useState(0);
    const [songSlider, setSongSlider] = useState();

    const handleNextSlider = () => {
        if (index < array.length - 3) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    };

    useEffect(() => {
        if (array) setSongSlider(array.slice(index, index + 3));
        // eslint-disable-next-line
    }, [index]);

    const handlePreSlider = () => {
        if (index > 0) {
            setIndex(index - 1);
        } else {
            setIndex(array.length - 3);
        }
    };

    const navigate = useNavigate();
    const handleChooseSlide = async (item) => {
        if (item.type === 4) {
            navigate(`/music/album/${item.encodeId}`);
        } else if (item.type === 1) {
            try {
                const response = await musicApi.getSong(item.encodeId);
                if (response.success) {
                    dispatch(
                        loadSong({
                            ...response.info,
                            link: response.data['128'],
                        }),
                    );
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div className={cx('wrapper')}>
            {songSlider ? (
                <div className={cx(['row', 'sm-gutter'], 'slider')}>
                    <div className={cx('button')} onClick={handlePreSlider}>
                        <FontAwesomeIcon className={cx('icon')} icon={faChevronLeft} />
                    </div>
                    {songSlider.map((item, index) => (
                        <div key={index} className={cx(['col', 'l-4'])} onClick={() => handleChooseSlide(item)}>
                            <img className={cx('img')} src={item.banner} alt=""></img>
                        </div>
                    ))}

                    <div className={cx('button-right')} onClick={handleNextSlider}>
                        <FontAwesomeIcon className={cx('icon')} icon={faChevronRight} />
                    </div>
                </div>
            ) : (
                <div className={cx('slider')}>
                    <div className={cx(['row', 'sm-gutter', 'slider-loading'])}>
                        <div className={cx(['col', 'l-4'])}>
                            <div className={cx('loading')} style={{ animation: 'loading 2s infinite' }}></div>
                        </div>
                        <div className={cx(['col', 'l-4'])}>
                            <div className={cx('loading')} style={{ animation: 'loading 2s infinite' }}></div>
                        </div>
                        <div className={cx(['col', 'l-4'])}>
                            <div className={cx('loading')} style={{ animation: 'loading 2s infinite' }}></div>
                        </div>
                    </div>
                </div>
            )}
            <div>
                {songState.homeMusic ? (
                    songState.homeMusic.map((concept, index) => {
                        let value = null;
                        if (concept.sectionType === 'weekChart' || concept.sectionType === 'livestream') {
                            return (value = <div key={index}></div>);
                        } else if (concept.sectionType === 'artistSpotlight') {
                            return (value = <div key={index}></div>);
                        } else if (concept.sectionType === 'RTChart') {
                            return (value = <div key={index}></div>);
                        } else if (concept.sectionType === 'newReleaseChart') {
                            return (value = <NewSongRelease concept={concept} key={index} />);
                        } else if (concept.sectionType === 'new-release' && concept.sectionId !== 'hSlider') {
                            return (value = <NewSongConcept key={index} />);
                        } else if (concept.items && concept.sectionId !== 'hSlider') {
                            const title = concept.title || '';
                            return (value = <SongConcept key={index} title={title} data={concept} />);
                        }
                        return value;
                    })
                ) : (
                    <div>
                        <Loading />
                        <Loading />
                        <Loading />
                        <Loading />
                    </div>
                )}
            </div>
        </div>
    );
}

export default HomeMusic;
