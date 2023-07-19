import styles from './Loading.module.scss';
import classNames from 'classnames/bind';
import useViewport from '~/hooks/useViewport';

const cx = classNames.bind(styles);
function Loading({ single }) {
    const viewPort = useViewport();
    const isMobile = viewPort.width < 740;

    if (single) {
        return (
            <div className={cx('single')}>
                <div className={cx('single-item')} style={{ animation: 'loading 2s infinite' }}></div>
            </div>
        );
    }
    let body = null;

    if (isMobile) {
        body = (
            <div className={cx('mobile')}>
                <div className={cx('wrapper')}>
                    <div className={cx('header')}>
                        <div className={cx('header-title')} style={{ animation: 'loading 2s infinite' }}></div>
                    </div>
                    <div className={cx(['row', 'sm-gutter'])}>
                        <div className={cx(['col', 'l-2-4', 'm-4', 'c-6'], 'loading-item')}>
                            <div className={cx('item-loading')} style={{ animation: 'loading 2s infinite' }}></div>
                            <div
                                className={cx('item-title-loading')}
                                style={{ animation: 'loading 2s infinite' }}
                            ></div>
                        </div>
                        <div className={cx(['col', 'l-2-4', 'm-4', 'c-6'])}>
                            <div className={cx('item-loading')} style={{ animation: 'loading 2s infinite' }}></div>
                            <div
                                className={cx('item-title-loading')}
                                style={{ animation: 'loading 2s infinite' }}
                            ></div>
                        </div>
                        <div className={cx(['col', 'l-2-4', 'm-4', 'c-6'])}>
                            <div className={cx('item-loading')} style={{ animation: 'loading 2s infinite' }}></div>
                            <div
                                className={cx('item-title-loading')}
                                style={{ animation: 'loading 2s infinite' }}
                            ></div>
                        </div>
                        <div className={cx(['col', 'l-2-4', 'm-4', 'c-6'])}>
                            <div className={cx('item-loading')} style={{ animation: 'loading 2s infinite' }}></div>
                            <div
                                className={cx('item-title-loading')}
                                style={{ animation: 'loading 2s infinite' }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!isMobile) {
        body = (
            <div className={cx('wrapper')}>
                <div className={cx('header')}>
                    <div className={cx('header-title')} style={{ animation: 'loading 2s infinite' }}></div>
                </div>
                <div className={cx(['row', 'sm-gutter'])}>
                    <div className={cx(['col', 'l-2-4', 'm-4', 'c-6'])}>
                        <div className={cx('item-loading')} style={{ animation: 'loading 2s infinite' }}></div>
                        <div className={cx('item-title-loading')} style={{ animation: 'loading 2s infinite' }}></div>
                    </div>
                    <div className={cx(['col', 'l-2-4', 'm-4', 'c-6'])}>
                        <div className={cx('item-loading')} style={{ animation: 'loading 2s infinite' }}></div>
                        <div className={cx('item-title-loading')} style={{ animation: 'loading 2s infinite' }}></div>
                    </div>
                    <div className={cx(['col', 'l-2-4', 'm-4', 'c-6'])}>
                        <div className={cx('item-loading')} style={{ animation: 'loading 2s infinite' }}></div>
                        <div className={cx('item-title-loading')} style={{ animation: 'loading 2s infinite' }}></div>
                    </div>
                    <div className={cx(['col', 'l-2-4', 'm-4', 'c-6'])}>
                        <div className={cx('item-loading')} style={{ animation: 'loading 2s infinite' }}></div>
                        <div className={cx('item-title-loading')} style={{ animation: 'loading 2s infinite' }}></div>
                    </div>
                    <div className={cx(['col', 'l-2-4', 'm-4', 'c-6'])}>
                        <div className={cx('item-loading')} style={{ animation: 'loading 2s infinite' }}></div>
                        <div className={cx('item-title-loading')} style={{ animation: 'loading 2s infinite' }}></div>
                    </div>
                </div>
            </div>
        );
    }
    return body;
}

export default Loading;
