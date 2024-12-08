import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import images from '~/assets/img';

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner')}>
                <img alt="profile" src={images.userProfile} className={cx('banner-img')}></img>
                <div className={cx('banner-user')}>
                    <img src={images.avatar} alt="avatar" className={cx('user-img')}></img>
                    <p className={cx('user-name')}>Sơn nguyễn</p>
                </div>
            </div>

            <div className={cx('container')}>
                <div className="row">
                    <div className="col l-5">
                        <div className={cx('introduce')}>
                            <h4 className={cx('introduce-header')}>Thông tin tài khoản</h4>
                            <p className={cx('introduce-text')}>Họ tên: Nguyễn Văn Sơn</p>
                            <p className={cx('introduce-text')}>Email: nguyenson.cacr@gmail.com</p>
                            <p className={cx('introduce-text')}>Số điện thoại: 0963252517</p>
                        </div>
                    </div>
                    <div className="col l-7">
                        <ul className={cx('service')}>
                            <li className={cx('service-item')}>Đơn hàng</li>
                            <li className={cx('service-item')}>Dịch vụ</li>
                            <li className={cx('service-item')}>Thông báo</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
