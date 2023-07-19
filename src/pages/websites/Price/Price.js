import classNames from 'classnames/bind';
import styles from './Price.module.scss';
import { AiOutlineCheck } from 'react-icons/ai';

const cx = classNames.bind(styles);

function Price() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <p className={cx('header-title')}>BẢNG GIÁ</p>
                <p className={cx('header-des')}>
                    Bảng báo giá thiết kế website trọn gói tại Noloce, không phát sinh chi phí ngầm.
                </p>
            </div>
            <div className={cx('content')}>
                <div className="row">
                    <div className={cx(['col', 'l-6'])}>
                        <div className={cx('concept')}>
                            <div className={cx('content-header')}>
                                <p>Gói tiêu chuẩn</p>
                                <p>1.800.000 đồng</p>
                            </div>
                            <ul className={cx('content-list')}>
                                <li className={cx('content-item')}>
                                    <AiOutlineCheck className={cx('item-icon')} /> <p>01 Tên miền</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <AiOutlineCheck className={cx('item-icon')} /> <p>Dung lượng lưu trữ: 2GB</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <AiOutlineCheck className={cx('item-icon')} /> <p>Băng thông không giới hạn</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <AiOutlineCheck className={cx('item-icon')} /> <p>Mẫu web dựng sẵn</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <AiOutlineCheck className={cx('item-icon')} /> <p>Thiết kế logo</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <AiOutlineCheck className={cx('item-icon')} /> <p>Thiết kế chuẩn SEO</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <AiOutlineCheck className={cx('item-icon')} /> <p>Phiên bản mobile</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <AiOutlineCheck className={cx('item-icon')} /> <p>Chứng chỉ bảo mật SSL</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <AiOutlineCheck className={cx('item-icon')} /> <p>Bảo hành trọn đời</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <AiOutlineCheck className={cx('item-icon')} /> <p>Bàn giao source code</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <AiOutlineCheck className={cx('item-icon')} />{' '}
                                    <p>Tích hợp các mạng xã hội trên web</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx(['col', 'l-6'])}>
                        <div className={cx('concept')}>
                            <div className={cx('content-header')}>
                                <p>Thiết kế theo yêu cầu</p>
                                <p>2.500.000 đồng</p>
                            </div>
                            <p></p>
                            <ul className={cx('content-list')}>
                                <li className={cx('content-item')}>
                                    <AiOutlineCheck className={cx('item-icon')} /> <p>01 Tên miền</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <AiOutlineCheck className={cx('item-icon')} /> <p>Dung lượng lưu trữ: 5GB</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <AiOutlineCheck className={cx('item-icon')} /> <p>Băng thông không giới hạn</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <AiOutlineCheck className={cx('item-icon')} />{' '}
                                    <p>Thiết kế giao diện theo yêu cầu</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <AiOutlineCheck className={cx('item-icon')} /> <p>Thiết kế logo</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <AiOutlineCheck className={cx('item-icon')} /> <p>Thiết kế chuẩn SEO</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <AiOutlineCheck className={cx('item-icon')} /> <p>Phiên bản mobile</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <AiOutlineCheck className={cx('item-icon')} /> <p>Chứng chỉ bảo mật SSL</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <AiOutlineCheck className={cx('item-icon')} /> <p>Bảo hành trọn đời</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <AiOutlineCheck className={cx('item-icon')} /> <p>Bàn giao source code</p>
                                </li>
                                <li className={cx('content-item')}>
                                    <AiOutlineCheck className={cx('item-icon')} />{' '}
                                    <p>Tích hợp các mạng xã hội trên web</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Price;
