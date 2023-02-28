import styles from './SongConcept.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faPlay } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
function SongConcept({ title, data }) {
    const navigate = useNavigate();
    const handleOnclick = (id) => {
        navigate(`/music/album/${id}`);
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
                            data.items.map((item, index) => (
                                <div className="col l-3" key={index}>
                                    <div className={cx('song-list')} onClick={() => handleOnclick(item.encodeId)}>
                                        <div className={cx('song-img')}>
                                            <img alt="" src={item.thumbnailM} className={cx('img-content')}></img>
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

export default SongConcept;
