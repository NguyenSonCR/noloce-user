import styles from './PlayList.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/img';
import { AiOutlineClose } from 'react-icons/ai';
import { RiMoreLine } from 'react-icons/ri';
import musicApi from '~/api/music/musicApi';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { TfiComment } from 'react-icons/tfi';
import { RiShareForwardLine } from 'react-icons/ri';
import { BsDownload } from 'react-icons/bs';
import { deletePlaylist, setSingleMyPlaylist } from '~/slices/songSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addToast } from '~/slices/toastSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const cx = classNames.bind(styles);

function PlayList({ playlist, showAlbum, setShowAlbum }) {
    const dispatch = useDispatch();
    const toastState = useSelector((state) => state.toast);
    const handleDeletePlaylist = async (slug) => {
        try {
            const response = await musicApi.deletePlaylist(slug);
            if (response.success) {
                dispatch(deletePlaylist(slug));
                dispatch(
                    addToast({
                        id: toastState.toastList.length + 1,
                        content: response.message,
                        type: 'success',
                    }),
                );
            } else {
                dispatch(
                    addToast({
                        id: toastState.toastList.length + 1,
                        content: response.message,
                        type: 'error',
                    }),
                );
            }
        } catch (error) {
            console.log(error);
        }
    };

    const renderItems = () => {
        return (
            <div className={cx('menu-body')}>
                <div className={cx('menu-item')}>
                    <AiOutlinePlusCircle className={cx('menu-item-icon')} />
                    <p className={cx('menu-item-text')}>Thêm vào danh sách phát</p>
                </div>
                <div className={cx('menu-item')}>
                    <TfiComment className={cx('menu-item-icon')} />
                    <p className={cx('menu-item-text')}>Bình luận</p>
                </div>
                <div className={cx('menu-item')}>
                    <BsDownload className={cx('menu-item-icon')} />
                    <p className={cx('menu-item-text')}>Tải xuống</p>
                </div>
                <div className={cx('menu-item')}>
                    <RiShareForwardLine className={cx('menu-item-icon')} />
                    <p className={cx('menu-item-text')}>Chia sẻ</p>
                </div>
            </div>
        );
    };
    const navigate = useNavigate();
    const handleNavigate = (link, item) => {
        dispatch(setSingleMyPlaylist(item));
        navigate(link);
    };
    const [active, setActive] = useState(null);
    return (
        <div className={cx('content-song')}>
            <div className="grid wide">
                <div className={cx(['row', 'sm-gutter'])}>
                    {playlist.map((item, index) => (
                        <div className="col l-3 m-6 c-6" key={index}>
                            <div
                                className={cx('song-list')}
                                onClick={() => handleNavigate(`/music/mymusic/playlist/${item.slug}`, item)}
                            >
                                <div className={cx('song-img')}>
                                    <img alt="" src={images.song} className={cx('img-content')}></img>
                                    <div className={cx('overlay')}>
                                        <div className={cx('close-icon-wrapper')}>
                                            <AiOutlineClose
                                                className={cx('close-icon')}
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    handleDeletePlaylist(item.slug);
                                                }}
                                            />
                                        </div>
                                        <div className={cx('overplay-wrapper')}>
                                            <FontAwesomeIcon className={cx('overlay-icon')} icon={faPlay} />
                                        </div>
                                        <div
                                            className={cx('more-icon-wrapper')}
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                setShowAlbum((show) => !show);
                                                setActive(item._id);
                                            }}
                                        >
                                            <RiMoreLine className={cx('close-icon')} />
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('menu-list', showAlbum && active === item._id && 'show')}>
                                    <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
                                </div>

                                <p className={cx('song-name')}>{item.name}</p>
                                <p className={cx('song-author')}></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PlayList;
