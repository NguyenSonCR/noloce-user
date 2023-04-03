import styles from './HomeMusic.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import SongConcept from '~/layouts/components/SongConcept';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import musicApi from '~/api/music/musicApi';
import { setHomeMusic, loadSong } from '~/slices/songSlice';
import { useNavigate } from 'react-router-dom';
import Loading from '~/layouts/components/Loading';
import NewSongConcept from '~/layouts/components/NewSongConcept';
import NewSongRelease from '~/layouts/components/NewSongRelease';
import config from '~/config';
import useViewport from '~/hooks/useViewport';

const cx = classNames.bind(styles);
function HomeMusic() {
    const songState = useSelector((state) => state.song);

    const viewPort = useViewport();
    const isMobile = viewPort.width < 740;

    const dispatch = useDispatch();
    useEffect(() => {
        if (!songState.homeMusic) {
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
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (songState.homeMusic) {
            setArray([
                ...songState.homeMusic[0].items,
                songState.homeMusic[0].items[0],
                songState.homeMusic[0].items[1],
            ]);
            setSongSlider(songState.homeMusic[0].items.slice(0, 3));
        }
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
        }
        // else if (item.type === 1) {
        //     console.log(item);
        //     try {
        //         const response = await musicApi.getSong(item.encodeId);
        //         if (response.success) {
        //             dispatch(setAlbumPlaying({ playlist: [...item]}));
        //             dispatch(
        //                 loadSong({
        //                     ...response.info,
        //                     link: response.data['128'],
        //                 }),
        //             );
        //         }
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }
    };

    let body = null;
    if (isMobile) {
        body = (
            <div className={cx('mobile')}>
                <div className={cx('wrapper')}>
                    {songSlider ? (
                        <div className={cx(['row', 'sm-gutter'], 'slider')}>
                            <div className={cx('button')} onClick={handlePreSlider}>
                                <FontAwesomeIcon className={cx('icon')} icon={faChevronLeft} />
                            </div>
                            {songSlider.map((item, index) => (
                                <div
                                    key={index}
                                    className={cx(['col', 'l-4', 'm-6', 'c-12'])}
                                    onClick={() => handleChooseSlide(item)}
                                >
                                    <img className={cx('img')} src={item.banner} alt=""></img>
                                </div>
                            ))}

                            <div className={cx('button-right')} onClick={handleNextSlider}>
                                <FontAwesomeIcon className={cx('icon')} icon={faChevronRight} />
                            </div>
                        </div>
                    ) : (
                        <div className={cx(['row'])}>
                            <div className={cx(['col', 'l-4', 'm-6', 'c-12'])}>
                                <div className={cx('loading')} style={{ animation: 'loading 2s infinite' }}></div>
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
                                    return (value = (
                                        <NewSongRelease concept={concept} key={index} link={config.routes.newRelease} />
                                    ));
                                } else if (concept.sectionType === 'new-release' && concept.sectionId !== 'hSlider') {
                                    return (value = <NewSongConcept key={index} link={config.routes.newRelease} />);
                                } else if (concept.items && concept.sectionId !== 'hSlider') {
                                    const title = concept.title || '';
                                    if (concept.title === 'Top 100') {
                                        return (value = (
                                            <SongConcept
                                                key={index}
                                                title={title}
                                                data={concept}
                                                link={config.routes.top100}
                                            />
                                        ));
                                    }

                                    return (value = (
                                        <SongConcept key={index} title={title} data={concept} all={false} />
                                    ));
                                }
                                return value;
                            })
                        ) : (
                            <div className={cx('content-loading')}>
                                <Loading />
                                <Loading />
                                <Loading />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    if (!isMobile) {
        body = (
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
                    <div className={cx(['row', 'sm-gutter'])}>
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
                                return (value = (
                                    <NewSongRelease concept={concept} key={index} link={config.routes.newRelease} />
                                ));
                            } else if (concept.sectionType === 'new-release' && concept.sectionId !== 'hSlider') {
                                return (value = <NewSongConcept key={index} link={config.routes.newRelease} />);
                            } else if (concept.items && concept.sectionId !== 'hSlider') {
                                const title = concept.title || '';
                                if (concept.title === 'Top 100') {
                                    return (value = (
                                        <SongConcept
                                            key={index}
                                            title={title}
                                            data={concept}
                                            link={config.routes.top100}
                                        />
                                    ));
                                }

                                return (value = <SongConcept key={index} title={title} data={concept} all={false} />);
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
    return body;
}

export default HomeMusic;
