import styles from './SongLyric.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);
function SongLyric({ audioPlayer }) {
    const [active, setActive] = useState(null);
    const songState = useSelector((state) => state.song);
    const [touch, setTouch] = useState(false);

    // // scroll
    const refs = useRef([]);
    const handleClickScroll = (active) => {
        refs?.current?.[active]?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        });
    };

    useEffect(() => {
        if (songState.songLyric && !touch && active !== null) {
            handleClickScroll(active);
        } else {
            handleClickScroll(0);
        }
        // eslint-disable-next-line
    }, [active]);

    useEffect(() => {
        if (songState.songLyric) {
            let array = [];
            songState.songLyric.forEach((line) => {
                if (audioPlayer.current.currentTime * 1000 >= line.startTime - 100) {
                    array = [...array, true];
                } else {
                    array = [...array, false];
                }
            });
            const index = array.lastIndexOf(true);
            console.log(index);
            setActive(index);
        }

        // eslint-disable-next-line
    }, [audioPlayer?.current?.currentTime]);

    return (
        <div className={cx('wrapper')} onMouseDown={() => setTouch(true)} onMouseUp={() => setTouch(false)}>
            {
                songState?.songLyric?.length > 0 &&
                    songState.songLyric.map((line, index) => (
                        <p
                            key={index}
                            ref={(element) => {
                                refs.current[index] = element;
                            }}
                            className={cx('line-text', active === index && 'active')}
                        >
                            {line.words}
                        </p>
                    ))
                // <div className={cx('no-lyrics')}>
                //     Lời bài hát đang được cập nhật (chưa thực hiện đọc data từ file IRC)
                // </div>
            }
        </div>
    );
}

export default SongLyric;
