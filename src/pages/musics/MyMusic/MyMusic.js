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
                </ul>
            </div>
        </div>
    );
}

export default MyMusic;
