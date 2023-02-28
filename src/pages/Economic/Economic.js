import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import styles from './Economic.module.scss';

const cx = classNames.bind(styles);
function Economic() {
    return (
        <div className={cx(['row'])}>
            <div className={cx(['col', 'l-4'], 'wrapper')}>
                <Link>
                    <img
                        alt=""
                        className={cx('img')}
                        src="https://product.hstatic.net/1000012173/product/4af2f73477d9a92b3e8d8f11632_2048x2048_923aff6146254222a8729c812141b5a3_df707ab151444a7c8e549acb52ba07d3_1024x1024.jpeg"
                    ></img>
                </Link>
                <p className={cx('title')}> Website bán mỹ phẩm</p>
                <div className={cx('button')}>
                    <Button primary className={cx('button-item')}>
                        Chi tiết
                    </Button>
                    <Button primary className={cx('button-item')}>
                        Xem thực tế
                    </Button>
                </div>
            </div>
            <div className={cx(['col', 'l-4'], 'wrapper')}>
                <Link>
                    <img
                        alt=""
                        className={cx('img')}
                        src="https://product.hstatic.net/1000012173/product/4af2f73477d9a92b3e8d8f11632_2048x2048_923aff6146254222a8729c812141b5a3_df707ab151444a7c8e549acb52ba07d3_1024x1024.jpeg"
                    ></img>
                </Link>
                <p className={cx('title')}> Website bán mỹ phẩm</p>
                <div className={cx('button')}>
                    <Button primary className={cx('button-item')}>
                        Chi tiết
                    </Button>
                    <Button primary className={cx('button-item')}>
                        Xem thực tế
                    </Button>
                </div>
            </div>
            <div className={cx(['col', 'l-4'], 'wrapper')}>
                <Link>
                    <img
                        alt=""
                        className={cx('img')}
                        src="https://product.hstatic.net/1000012173/product/4af2f73477d9a92b3e8d8f11632_2048x2048_923aff6146254222a8729c812141b5a3_df707ab151444a7c8e549acb52ba07d3_1024x1024.jpeg"
                    ></img>
                </Link>
                <p className={cx('title')}> Website bán mỹ phẩm</p>
                <div className={cx('button')}>
                    <Button primary className={cx('button-item')}>
                        Chi tiết
                    </Button>
                    <Button primary className={cx('button-item')}>
                        Xem thực tế
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Economic;
