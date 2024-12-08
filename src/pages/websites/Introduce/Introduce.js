import classNames from 'classnames/bind';
import styles from './Introduce.module.scss';
import images from '~/assets/img';
const cx = classNames.bind(styles);

function Introduce() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('concept')}>
                <h4 className={cx('concept-header')}>BẠN CÓ BIẾT?</h4>
                <p className={cx('concept-descreption')}>
                    Tất cả các Công ty lớn trên địa cầu đều có website của riêng mình, ngoài ra, họ còn có các kênh
                    thông tin trên nhiều nền tảng mạng xã hội như facebook, zalo, youtube, instagram... Đây là những
                    công cụ để các công ty tiến hành các dịch vụ marketing, kết nối, chăm sóc khách hàng, phục vụ quá
                    trình xây dựng, phát triển công ty.
                </p>
                <p className={cx('concept-descreption')}>
                    Trang website trước tiên là một nơi để lưu trữ dữ liệu trực tuyến của một đơn vị, là một địa chỉ
                    online giúp khách hàng tìm thấy các dịch vụ của bạn, qua đó, giúp thực hiện các giao dịch trực tuyến
                    một cách thuận tiện, nhanh chóng, đem lại lợi ích thiết thực cho Công ty của bạn. Trên thế giới thì
                    lĩnh vực website đã phát triển từ lâu, đã hình thành và hoạt động ổn định, tuy nhiên ở Việt Nam
                    những năm gần đây nhu cầu xây dựng website tăng cao do sự phát triển của các hình thức kinh doanh
                    online cũng như nhu cầu số hóa của các đơn vị kinh doanh.
                </p>

                <p className={cx('concept-descreption')}>
                    Để xây dựng được một website tốt, sử dụng hiệu quả thì không phải lúc nào cũng dễ dàng, trước tiên
                    đó là quá trình xây dựng website, đòi hỏi nhà thiết kế phải nắm bắt được ý tưởng cũng như nội dung
                    của khách hàng, tiếp đó là trong quá trình xây dựng phải thường bảo trì, nâng cấp hệ thống, phải có
                    lộ trình, chiến lược trong việc quản lý, duy trì, phát triển website của mình. Đây là một vấn đề lớn
                    nói chung trong xây dựng và phát triển website hiện nay.
                </p>

                <p className={cx('concept-descreption')}>
                    Thấu hiểu được những khó khăn của khách hàng, Noloce cung cấp dịch vụ thiết kế website giá rẻ chuyên
                    nghiệp cho mọi khách hàng. Với mong muốn góp phần vào sự thành công của khách hàng, chúng tôi luôn
                    nêu cao tinh thần, trách nhiệm, sự nhiệt huyết, sức sáng tạo và tính chuyên môn cao trong quá trình
                    làm việc. Đảm bảo mọi sản phẩm đều được thiết kế một cách chỉnh chu nhất, đặt tiêu chí hài lòng của
                    khách hàng lên hàng đầu trong quá trình thiết kế. Đồng thời, tư vấn khách hàng trong quá trình xây
                    dựng và phát triển website, đảm bảo phục vụ có hiệu quả trong việc kinh doanh online của khách hàng.
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
                <p className={cx('concept_2-header')}>BẠN NHẬN ĐƯỢC GÌ TỪ NOLOCE?</p>
                <div className="row">
                    <div className={cx(['col', 'l-6', 'm-6'], 'concept_2-content')}>
                        <p className={cx('concept_2-col-header')}>1. Sự uy tín</p>
                        <p className={cx('concept_2-text')}>
                            Là chìa khóa dẫn tới thành công của mọi sự hợp tác, chúng tôi cam kết mọi giao dịch đều thực
                            hiện theo đúng hợp đồng, đảm bảo hài lòng đối với mỗi khách hàng
                        </p>
                    </div>
                    <div className={cx(['col', 'l-6', 'm-6'], 'concept_2-content')}>
                        <p className={cx('concept_2-col-header')}>2. Sự chỉnh chu</p>
                        <p className={cx('concept_2-text')}>
                            Luôn chỉnh chu trong từng chi tiết, phối hợp màu sắc và phân bố bố cục hợp lý, sẵn sàng điều
                            chỉnh mọi nội dung theo ý của khách hàng
                        </p>
                    </div>
                    <div className={cx(['col', 'l-6', 'm-6'], 'concept_2-content')}>
                        <p className={cx('concept_2-col-header')}>3. Chất lượng</p>
                        <p className={cx('concept_2-text')}>
                            Lấy chất lượng làm tiêu chí hàng đầu. Chúng tôi luôn luôn nâng cao chất lượng dịch vụ, tối
                            ưu hóa trải nghiệm của khách hàng, đảm bảo
                        </p>
                    </div>
                    <div className={cx(['col', 'l-6', 'm-6'], 'concept_2-content')}>
                        <p className={cx('concept_2-col-header')}> 4. Tinh thần trách nhiệm</p>
                        <p className={cx('concept_2-text')}>
                            Luôn nêu cao tinh thần trách nhiệm trong quá trình hợp tác, sẵn sàng tiếp nhận mọi ý kiến
                            của khách hàng, hỗ trợ hết mình trong khả năng có thể
                        </p>
                    </div>
                </div>
            </div>

            {/* <div className={cx('concept_3')}>
                <p className={cx('concept_3-header')}>CHIẾN LƯỢC PHÁT TRIỂN</p>
                <div className={cx('concept_3-content')}>
                    <p>1. </p>
                </div>
            </div> */}
        </div>
    );
}

export default Introduce;
