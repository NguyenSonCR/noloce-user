import classNames from 'classnames/bind';
import styles from './Introduce.module.scss';
import images from '~/assets/img';
const cx = classNames.bind(styles);

function Introduce() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('concept')}>
                <h4 className={cx('concept-header')}>CÔNG TY THIẾT KẾ WEBSITE CHUYÊN NGHIỆP NOLOCE</h4>
                <p className={cx('concept-descreption')}>
                    Noloce là đơn vị thiết kế website giá rẻ chuyên nghiệp mọi lĩnh vực cho khách hàng. Với mong muốn
                    góp phần vào sự thành công của khách hàng, chúng tôi luôn nêu cao tinh thần, trách nhiệm, sự nhiệt
                    huyết, sức sáng tạo và tính chuyên môn cao trong quá trình làm việc. Đảm bảo mọi sản phẩm đều được
                    thiết kế một cách chỉnh chu nhất, đặt tiêu chí hài lòng của khách hàng lên hàng đầu trong quá trình
                    thiết kế.
                </p>
                <p className={cx('concept-descreption')}>
                    Bên cạnh đó, chúng tôi luôn luôn đồng hành cùng với khách hàng trong quá trình xây dựng, sử dụng
                    website, lấy sự uy tín của Công ty làm chìa khóa hợp tác với khách hàng.
                </p>
                <div className={cx('concept_show')}>
                    <div className={cx('concept_show-col')}>
                        <img alt="" src={images.officeBuilding} className={cx('concept_show-img')}></img>
                        <p className={cx('concept_show-text')}>THIẾT KẾ WEBSITE DOANH NGHIỆP</p>
                    </div>

                    <div className={cx('concept_show-col')}>
                        <img alt="" src={images.onlineShopping} className={cx('concept_show-img')}></img>
                        <p className={cx('concept_show-text')}>THIẾT KẾ WEBSITE BÁN HÀNG</p>
                    </div>

                    <div className={cx('concept_show-col')}>
                        <img alt="" src={images.newsPaper} className={cx('concept_show-img')}></img>
                        <p className={cx('concept_show-text')}>THIẾT KẾ WEBSITE TIN TỨC</p>
                    </div>

                    <div className={cx('concept_show-col')}>
                        <img alt="" src={images.feature} className={cx('concept_show-img')}></img>
                        <p className={cx('concept_show-text')}>CÁC DỊCH VỤ KHÁC</p>
                    </div>
                </div>
            </div>

            <div className={cx('concept_1')}>
                <div className={cx('concept_1-des')}>
                    <p className={cx('concept_1-des-header')}>
                        Chúng tôi tự tin sẽ đem lại những bản thiết kế website và chiến lược website phù hợp để phục vụ
                        quý khách theo những tiêu chí:
                    </p>
                    <ul className={cx('concept_1-list')}>
                        <li className={cx('concept_1-item')}>Đẹp</li>
                        <li className={cx('concept_1-item')}>Bảo mật</li>
                        <li className={cx('concept_1-item')}>Sáng tạo</li>
                        <li className={cx('concept_1-item')}>
                            Đem lại lợi thế kinh doanh trực tuyến thực sự cho quý doanh nghiệp.
                        </li>
                    </ul>
                    <p className={cx('concept_1-des-footer')}>
                        Quan điểm của chúng tôi, hoàn thành được một dự án là tạo điều kiện cho doanh nghiệp kinh doanh
                        một cách hiệu quả.
                    </p>
                </div>
                <div className={cx('concept_1-img')}>
                    <img alt="" src={images.webComplete} className={cx('concept_1-img-tag')}></img>
                </div>
            </div>

            <div className={cx('concept_2')}>
                <p className={cx('concept_2-header')}>CHÚNG TÔI CÓ THỂ LÀM ĐƯỢC NHỮNG GÌ</p>
                <div className="row">
                    <div className="col l-3 m-3">
                        <p className={cx('concept_2-col-header')}>THIẾT KẾ GIAO DIỆN THEO YÊU CẦU</p>
                        <p className={cx('concept_2-text')}>
                            Cụ thể hóa ý tưởng và cùng nhau lên kế hoạch xây dựng website một cách hợp lý nhất.
                        </p>
                    </div>
                    <div className="col l-3 m-3">
                        <p className={cx('concept_2-col-header')}>TRANG ADMIN QUẢN LÝ</p>
                        <p className={cx('concept_2-text')}>
                            Xây dựng riêng một trang admin giúp khách hàng quản lý một cách hiệu quả trang web
                        </p>
                    </div>
                    <div className="col l-3 m-3">
                        <p className={cx('concept_2-col-header')}>CHẤT LƯỢNG</p>
                        <p className={cx('concept_2-text')}>
                            Lấy chất lượng làm tiêu chí hàng đầu. Chúng tôi luôn chỉnh chu mọi chi tiết trong quá trình
                            xây dựng. Đảm bảo khách hàng hài lòng nhất
                        </p>
                    </div>
                    <div className="col l-3 m-3">
                        <p className={cx('concept_2-col-header')}> HỖ TRỢ TRIỂN KHA</p>
                        <p className={cx('concept_2-text')}>
                            Trước hết, chúng tôi có nhận viết thêm tính năng tuỳ ý cho bạn.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduce;
