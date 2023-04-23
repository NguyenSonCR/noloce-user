import classNames from 'classnames/bind';
import styles from './Procedure.module.scss';
import images from '~/assets/img';

const cx = classNames.bind(styles);

function Procedure() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h4 className={cx('title')}>QUY TRÌNH LÀM VIỆC</h4>
                <p>
                    Cam kết hoàn thiện các sản phẩm một cách chỉnh chu nhất, lấy mức độ hài lòng của khách hàng làm
                    thước đo uy tín về chúng tôi
                </p>
            </div>
            <div className={cx('container')}>
                <div className={cx(['row'], 'concept')}>
                    <div className={cx(['col', 'l-6'])}>
                        <div className={cx('content')}>
                            <p className={cx('content-title')}>CỤ THỂ HÓA Ý TƯỞNG CỦA BẠN</p>
                            <ul className={cx('content-list')}>
                                <li className={cx('content-item')}>
                                    Xác định lĩnh vực bạn muốn thực hiện dự án, tính khả thi của dự án
                                </li>
                                <li className={cx('content-item')}>
                                    Phân tích tình hình thị trường, khả năng, hiệu quả của dự án nếu được thực hiện
                                </li>
                                <li className={cx('content-item')}>Phân tích khả năng phát triển, mở rộng của dự án</li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx(['col', 'l-6'])}>
                        <div className={cx('content-img')}>
                            <img src={images.data} alt=""></img>
                        </div>
                    </div>
                </div>
                <div className={cx(['row'], 'concept')}>
                    <div className={cx(['col', 'l-6'])}>
                        <div className={cx('content-img')}>
                            <img src={images.data} alt=""></img>
                        </div>
                    </div>
                    <div className={cx(['col', 'l-6'])}>
                        <div className={cx('content')}>
                            <p className={cx('content-title')}>XÂY DỰNG KẾ HOẠCH</p>
                            <ul className={cx('content-list')}>
                                <li className={cx('content-item')}>
                                    Xác định công nghệ sử dụng để thực hiện dự án, bao gồm giao diện người dùng, máy
                                    chủ, dữ liệu dự án
                                </li>
                                <li className={cx('content-item')}>
                                    Xác định phương pháp lựa chọn, thiết kế giao diện người dùng
                                </li>
                                <li className={cx('content-item')}>Dự kiến thời gian hoàn thành các hạng mục dự án</li>
                                <li className={cx('content-item')}>
                                    Dự toán ngân sách chi tiêu đến khi hoàn thành dự án
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={cx(['row'], 'concept')}>
                    <div className={cx(['col', 'l-6'])}>
                        <div className={cx('content')}>
                            <p className={cx('content-title')}>THIẾT KẾ</p>
                            <ul className={cx('content-list')}>
                                <li className={cx('content-item')}>
                                    Xây dựng thương hiệu đặc trưng riêng của khách hàng
                                </li>
                                <li className={cx('content-item')}>
                                    Thiết kế theo yêu cầu của khách hàng, chỉnh chu trong từng chi tiết
                                </li>
                                <li className={cx('content-item')}>
                                    Nắm bắt xu thế, xây dựng trải nghiệm người dùng một cách hiệu quả nhất
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx(['col', 'l-6'])}>
                        <div className={cx('content-img')}>
                            <img src={images.data} alt=""></img>
                        </div>
                    </div>
                </div>
                <div className={cx(['row'], 'concept')}>
                    <div className={cx(['col', 'l-6'])}>
                        <div className={cx('content-img')}>
                            <img src={images.data} alt=""></img>
                        </div>
                    </div>
                    <div className={cx(['col', 'l-6'])}>
                        <div className={cx('content')}>
                            <p className={cx('content-title')}>LẬP TRÌNH</p>
                            <ul className={cx('content-list')}>
                                <li className={cx('content-item')}>Xây dựng giao diện người dùng</li>
                                <li className={cx('content-item')}>
                                    Xây dựng hệ thống máy chủ xử lý truy cập, nơi lưu trữ dữ liệu hệ thống dự án
                                </li>
                                <li className={cx('content-item')}>
                                    Tích hợp các nền tảng mạng xã hội như facebook, google trong quá trình đăng nhập hệ
                                    thống, thông tin liên hệ
                                </li>
                                <li className={cx('content-item')}>Xây dựng hệ thống bảo mật dự án</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={cx(['row'], 'concept')}>
                    <div className={cx(['col', 'l-6'])}>
                        <div className={cx('content')}>
                            <p className={cx('content-title')}>XÂY DỰNG NỘI DUNG</p>
                            <ul className={cx('content-list')}>
                                <li className={cx('content-item')}>Hoạch định nội dung và xác định keyword</li>
                                <li className={cx('content-item')}>Sáng tạo và sản xuất nội dung</li>
                                <li className={cx('content-item')}>Tối ưu hóa công cụ tìm kiếm</li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx(['col', 'l-6'])}>
                        <div className={cx('content-img')}>
                            <img src={images.data} alt=""></img>
                        </div>
                    </div>
                </div>

                <div className={cx(['row'], 'concept')}>
                    <div className={cx(['col', 'l-6'])}>
                        <div className={cx('content-img')}>
                            <img src={images.data} alt=""></img>
                        </div>
                    </div>
                    <div className={cx(['col', 'l-6'])}>
                        <div className={cx('content')}>
                            <p className={cx('content-title')}>HOÀN THIỆN DỰ ÁN</p>
                            <ul className={cx('content-list')}>
                                <li className={cx('content-item')}>Đưa dự án vào chạy thực tế trên không gian mạng</li>
                                <li className={cx('content-item')}>Tiếp thu, xử lý ý kiến từ khách hàng</li>
                                <li className={cx('content-item')}>Tối ưu hóa, xử lý các lỗi (nếu có) </li>
                                <li className={cx('content-item')}>Hoàn thiện sản phẩm</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={cx(['row'], 'concept')}>
                    <div className={cx(['col', 'l-6'])}>
                        <div className={cx('content')}>
                            <p className={cx('content-title')}>BÀN GIAO, THANH TOÁN DỰ ÁN</p>
                            <ul className={cx('content-list')}>
                                <li className={cx('content-item')}>Bàn giao source code của dự án</li>
                                <li className={cx('content-item')}> Tư vấn kinh phí duy trì hoạt động của dự án </li>
                                <li className={cx('content-item')}>Tư vấn, bảo hành trong suốt quá trình chạy dự án</li>
                                <li className={cx('content-item')}>Thanh toán hợp đồng</li>
                            </ul>
                        </div>
                    </div>

                    <div className={cx(['col', 'l-6'])}>
                        <div className={cx('content-img')}>
                            <img src={images.data} alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Procedure;
