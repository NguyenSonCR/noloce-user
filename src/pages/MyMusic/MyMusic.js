import styles from './MyMusic.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import SongItem from '~/layouts/components/SongItem';
import songs from '~/assets/songs';
import PlayList from '~/layouts/components/PlayListModel/PlayListModel';
import { useState } from 'react';
import Model from '~/components/Model';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function MyMusic() {
    const songList = [
        {
            songId: 1,
            name: 'Đêm trăng tình yêu',
            author: 'Hải Băng',
            url: songs.song1,
            duration: '04:37',
            album: 'Tình yêu',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/covers/6/2/62df066e6f9196dbeedadd35931b88ae_1382408334.jpg',
        },
        {
            songId: 2,
            url: songs.song2,
            author: 'Miu Lê',
            name: 'Tình yêu mang theo',
            album: 'Tình yêu',
            duration: '04:27',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/covers/6/2/62df066e6f9196dbeedadd35931b88ae_1382408334.jpg',
        },

        {
            songId: 3,
            url: songs.song3,
            author: 'Weboys',
            name: 'Anh Sẽ Quay Về',
            album: 'My Love',
            duration: '04:27',
            img: 'https://photo-resize-zmp3.zmdcdn.me/w480_r1x1_webp/covers/7/3/73688444a73a76169d03b689a7e785cf_1358677291.jpg',
        },
    ];

    // useState
    const [model, setModel] = useState(false);

    return (
        <div className={cx('wrapper')}>
            {/* model */}
            {model && (
                <Model onSetModel={setModel}>
                    <div className={cx('model-content')}>
                        <p>Tạo playlist mới</p>
                        <input
                            type={'text'}
                            placeholder="Nhập tên playlist"
                            spellCheck={false}
                            className={cx('model-input')}
                        ></input>
                        <Button type="text" primary>
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
                    <PlayList />
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
                    <SongItem songList={songList} />
                </ul>
            </div>
        </div>
    );
}

export default MyMusic;
