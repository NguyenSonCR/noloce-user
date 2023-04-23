import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('slogan')}>Bản quyền thuộc về Noloce</div>
        </div>
    );
}

export default Footer;
