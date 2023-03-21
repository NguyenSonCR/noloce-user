import styles from './MyPlaylist.module.scss';
import classNames from 'classnames/bind';
import SongItem from '~/layouts/components/SongItem';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Loading from '~/layouts/components/Loading';
import musicApi from '~/api/music/musicApi';
import images from '~/assets/img';
import { HiOutlinePencil } from 'react-icons/hi';
import { FiMoreHorizontal } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { setSingleMyPlaylist } from '~/slices/songSlice';
const cx = classNames.bind(styles);
function MyPlaylist() {
    const { slug } = useParams();
    const songState = useSelector((state) => state.song);
    const playlistChoose = songState.singleMyPlaylist;

    const dispatch = useDispatch();

    useEffect(() => {
        if (!playlistChoose) {
            musicApi
                .getSingleMyPlaylist(slug)
                .then((res) => {
                    dispatch(setSingleMyPlaylist(res.playlist));
                })
                .catch((error) => console.log(error));
        }
        // eslint-disable-next-line
    }, [slug]);

    let body = <Loading />;
    if (playlistChoose) {
        body = (
            <div className={cx('wrapper', ['row'])}>
                <div className={cx(['col', 'l-4'])}>
                    <div>
                        <img src={images.song} alt=""></img>
                    </div>
                    <div className={cx('items')}>
                        <p>{playlistChoose.name}</p>
                        <HiOutlinePencil className={cx('items-icon')}></HiOutlinePencil>
                    </div>
                    <div className={cx('items-more')}>
                        <div className={cx('items-wrapper')}>
                            <FiMoreHorizontal className={cx('items-more-icon')} />
                        </div>
                    </div>
                </div>
                <div className={cx(['col', 'l-8'])}>
                    <div className={cx('header')}>
                        <p className={cx('header-text')}>Danh sách bài hát</p>
                    </div>
                    {playlistChoose.song.length > 0 ? (
                        <SongItem songList={playlistChoose.song} title={playlistChoose.name} myPlaylist />
                    ) : (
                        <div>
                            <p className={cx('no-song-text')}>Chưa có bài hát nào trong playlist</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
    return body;
}

export default MyPlaylist;
