import styles from './Loading.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
function Loading({ single }) {
    if (single) {
        return (
            <div className={cx('single')}>
                <div className={cx('single-item')} style={{ animation: 'loading 2s infinite' }}></div>
            </div>
        );
    }
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('header-title')} style={{ animation: 'loading 2s infinite' }}></div>
            </div>
            <div className={cx('body', ['row', 'sm-gutter'])}>
                <div className={cx(['col', 'l-2-4'])}>
                    <div className={cx('item-loading')} style={{ animation: 'loading 2s infinite' }}></div>
                    <div className={cx('item-title-loading')} style={{ animation: 'loading 2s infinite' }}></div>
                </div>
                <div className={cx(['col', 'l-2-4'])}>
                    <div className={cx('item-loading')} style={{ animation: 'loading 2s infinite' }}></div>
                    <div className={cx('item-title-loading')} style={{ animation: 'loading 2s infinite' }}></div>
                </div>
                <div className={cx(['col', 'l-2-4'])}>
                    <div className={cx('item-loading')} style={{ animation: 'loading 2s infinite' }}></div>
                    <div className={cx('item-title-loading')} style={{ animation: 'loading 2s infinite' }}></div>
                </div>
                <div className={cx(['col', 'l-2-4'])}>
                    <div className={cx('item-loading')} style={{ animation: 'loading 2s infinite' }}></div>
                    <div className={cx('item-title-loading')} style={{ animation: 'loading 2s infinite' }}></div>
                </div>
                <div className={cx(['col', 'l-2-4'])}>
                    <div className={cx('item-loading')} style={{ animation: 'loading 2s infinite' }}></div>
                    <div className={cx('item-title-loading')} style={{ animation: 'loading 2s infinite' }}></div>
                </div>
            </div>
        </div>
    );
}

export default Loading;
