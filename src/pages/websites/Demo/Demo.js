import classNames from 'classnames/bind';
import styles from './Demo.module.scss';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function Demo() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('categories')}>
                <div className={cx('category')}>
                    <p>Website Giới thiệu</p>
                </div>
                <div className={cx('category')}>
                    <p>Website Blog cá nhân</p>
                </div>
                <div className={cx('category')}>
                    <p>Website Shop kinh doanh</p>
                </div>
                <div className={cx('category')}>
                    <p>Website Âm nhạc, xem phim</p>
                </div>
                <div className={cx('category')}>
                    <p>Website Tin tức</p>
                </div>
                <div className={cx('category')}>
                    <p>Website khác</p>
                </div>
            </div>

            <div className={cx(['row'], 'list-website')}>
                <div className={cx(['col', 'l-4', 'c-6', 'm-6'])}>
                    <div className={cx('item')}>
                        <img
                            alt=""
                            className={cx('item-img')}
                            src="https://theme.websiteviet.vn/files/builder/images/template/thuocnam.jpg"
                        ></img>
                        <div className={cx('item-action')}>
                            <Button target href={'https://perfume.noloce.com'} primary>
                                Xem thử
                            </Button>
                            <Button primary>Dùng thử</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Demo;
