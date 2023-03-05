import styles from './GenresConcept.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faPlay } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
function GenresConcept({ title, data, genres }) {
    const navigate = useNavigate();
    const handleOnclick = (id) => {
        if (!genres) {
            navigate(`/music/album/${id}`);
        } else {
            navigate(`/music/genres/${id}`);
        }
    };

    return (
        <div className={cx('content')}>
            <div className={cx('content-header')}>
                <p>{title}</p>
                <div className={cx('content-header-all')}>
                    <p>Tất cả</p>
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
            <div className={cx('content-song')}>
                <div className="grid wide">
                    <div className={cx(['row', 'sm-gutter'])}>
                        {data &&
                            Array.isArray(data) &&
                            data.map((item, index) => (
                                <div className="col l-2-4" key={index}>
                                    <div className={cx('song-list')} onClick={() => handleOnclick(item.encodeId)}>
                                        <div className={cx('song-img')}>
                                            <img
                                                alt=""
                                                src={item.thumbnailM || item.thumbnail}
                                                className={cx('img-content')}
                                            ></img>
                                            <div className={cx('overlay')}>
                                                <div className={cx('overplay-wrapper')}>
                                                    <FontAwesomeIcon className={cx('overlay-icon')} icon={faPlay} />
                                                </div>
                                            </div>
                                        </div>

                                        <p className={cx('song-name')}>{item.title}</p>
                                        <p className={cx('song-author')}></p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GenresConcept;
