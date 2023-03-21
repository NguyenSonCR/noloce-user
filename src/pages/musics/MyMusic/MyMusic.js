import styles from './MyMusic.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import PlayList from '~/layouts/components/PlayListModel/PlayListModel';
import { useEffect, useState } from 'react';
import Model from '~/components/Model';
import Button from '~/components/Button';
import musicApi from '~/api/music/musicApi';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import routes from '~/config/routes';
import SongItem from '~/layouts/components/SongItem';
import { setMyPlaylist, addMyPlaylist } from '~/slices/songSlice';
import { addToast } from '~/slices/toastSlice';
import Loading from '~/layouts/components/Loading';

const cx = classNames.bind(styles);
function MyMusic() {
    const authState = useSelector((state) => state.auth);
    const songState = useSelector((state) => state.song);
    const toastState = useSelector((state) => state.toast);
    // useState
    const [model, setModel] = useState(false);
    const [formValue, setFormValue] = useState({
        name: '',
    });

    useEffect(() => {
        if (songState.myPlaylist.length === 0) {
            musicApi
                .getAllMyPlaylist()
                .then((res) => {
                    dispatch(setMyPlaylist(res.playlist));
                })
                .catch((error) => console.log(error));
        }
        // eslint-disable-next-line
    }, [songState.myPlaylist]);

    const navigate = useNavigate();

    const { name } = formValue;
    const onChangeName = (event) => {
        setFormValue({ name: event.target.value });
    };

    const dispatch = useDispatch();
    const handleAddNewPlaylist = async () => {
        if (!authState.isAuthenticated) navigate(routes.login);
        try {
            const response = await musicApi.addPlaylist({
                ...formValue,
                username: authState.user.username,
            });
            if (response.success) {
                dispatch(addMyPlaylist(response.playlist));
                setModel(false);
                setFormValue({
                    name: '',
                });
                dispatch(
                    addToast({
                        id: toastState.toastList.length + 1,
                        content: response.message,
                        type: 'success',
                    }),
                );
            } else {
                console.log(response.message);
            }
        } catch (error) {
            console.log(error);
        }
    };
    const [showAlbum, setShowAlbum] = useState(false);
    return (
        <div
            className={cx('wrapper')}
            onClick={() => {
                setShowAlbum(false);
            }}
        >
            {/* model */}
            {model && (
                <Model onSetModel={setModel}>
                    <div className={cx('model-content')}>
                        <p>Tạo playlist mới</p>
                        <input
                            type={'text'}
                            placeholder="Nhập tên playlist"
                            spellCheck={false}
                            value={name}
                            className={cx('model-input')}
                            onChange={onChangeName}
                        ></input>
                        <Button type="text" primary onClick={handleAddNewPlaylist}>
                            Tạo mới
                        </Button>
                    </div>
                </Model>
            )}
            <div className={cx('playlist')}>
                <div className={cx('playlist-header')}>
                    <span>Playlist</span>
                    <div className={cx('playlist-header-add')} onClick={() => setModel(true)}>
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                </div>
                <div className={cx('playlist-content')}>
                    {songState?.myPlaylist.length > 0 ? (
                        <PlayList showAlbum={showAlbum} setShowAlbum={setShowAlbum} playlist={songState.myPlaylist} />
                    ) : (
                        <Loading />
                    )}
                </div>
            </div>
            <div className={cx('content')}>
                <ul className={cx('content-header')}>
                    <li className={cx('content-header-item')}>Bài hát</li>
                </ul>
                <ul className={cx('content-body')}>
                    <div className={cx('content-body__title')}>
                        <p className={cx('content-body__item')}>Bài hát</p>
                        <div className={cx('album')}>
                            <p className={cx('album__item')}>Album</p>
                            <p className={cx('album__item')}>Thời gian</p>
                        </div>
                    </div>
                    <div className={cx('content-songs')}>
                        {authState?.user?.music?.library && <SongItem songList={authState.user.music.library} />}
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default MyMusic;
