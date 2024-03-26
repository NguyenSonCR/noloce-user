import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import images from '~/assets/img';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className="grid wide">
                <div className="row">
                    <div className={cx(['col', 'l-3'])}>
                        <div className={cx('header')}>
                            <img alt="logo" src={images.logo} className={cx('header-img')}></img>
                            <p className={cx('header-text')}>Nơi vươn tầm ước mơ</p>
                        </div>
                        <ul className={cx('content')}>
                            <li className={cx('content-item')}>Điện thoại: 0963252517</li>
                            <li className={cx('content-item')}>Email: contact@noloce.com</li>
                            <li className={cx('content-item')}>
                                Số 10 Phạm Hùng, Phường Cam Phú, Thành phố Cam Ranh, Tỉnh Khánh Hòa.
                            </li>
                        </ul>
                    </div>
                    <div className={cx(['col', 'l-2'])}>
                        <div className={cx('header')}>
                            <p className={cx('header-text')}>VỀ NOLOCE</p>
                        </div>
                        <ul className={cx('content')}>
                            <li className={cx('content-item')}>Giới thiệu</li>
                            <li className={cx('content-item')}>Liên hệ</li>
                            <li className={cx('content-item')}>Điều khoản</li>
                            <li className={cx('content-item')}>Bảo mật</li>
                            <li className={cx('content-item')}>Cơ hội việc làm</li>
                        </ul>
                    </div>
                    <div className={cx(['col', 'l-2'])}>
                        <div className={cx('header')}>
                            <p className={cx('header-text')}>DỊCH VỤ</p>
                        </div>
                        <ul className={cx('content')}>
                            <li className={cx('content-item')}>Thiết kế website</li>
                            <li className={cx('content-item')}>Đăng ký tên miền</li>
                            <li className={cx('content-item')}>Đăng ký hosting, VPS</li>
                            <li className={cx('content-item')}>Thiết kế giao diện</li>
                            <li className={cx('content-item')}>Quản trị website</li>
                        </ul>
                    </div>
                    <div className={cx(['col', 'l-2'])}>
                        <div className={cx('header')}>
                            <p className={cx('header-text')}>HỖ TRỢ</p>
                        </div>
                        <ul className={cx('content')}>
                            <li className={cx('content-item')}>Học lập trình</li>
                            <li className={cx('content-item')}>Triển khai website</li>
                            <li className={cx('content-item')}>Video hướng dẫn</li>
                            <li className={cx('content-item')}>Blog</li>
                            <li className={cx('content-item')}>Tư vấn</li>
                        </ul>
                    </div>
                    <div className={cx(['col', 'l-3'])}>
                        {' '}
                        <div className={cx('header')}>
                            <p className={cx('header-text')}>CÔNG TY CỔ PHẦN THIẾT KẾ WEBSITE NOLOCE</p>
                        </div>
                        <ul className={cx('content')}>
                            <li className={cx('content-item')}>Mã số thuế: 0109922901</li>
                            <li className={cx('content-item')}>Ngày thành lập: 04/03/2022</li>
                            <li className={cx('content-item')}>
                                Lĩnh vực: Thiết kế webite, Công nghệ, giáo dục, lập trình. Noloce xây dựng và phát triển
                                những sản phẩm mang lại giá trị cho cộng đồng.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
