import classNames from 'classnames/bind';
import styles from './Website.module.scss';
import images from '~/assets/img';
import ImageSlider from '~/components/ImageSlider/ImageSlider';

const cx = classNames.bind(styles);

function Website() {
    const slider = [
        {
            img: images.data,
            text: 'Bạn đang cần một nơi để lưu trữ dữ liệu?',
        },
        {
            img: images.data,
            text: 'Bạn đang muốn một địa chỉ online để nâng cao sự tin tưởng của khách hàng?',
        },
        {
            img: images.data,
            text: 'Hoặc đơn giản chỉ là một nơi để thực hiện sở thích của bạn...',
        },
        {
            img: images.data,
            text: 'Hãy cùng chúng tôi xây dựng một website của riêng bạn...',
        },
        {
            img: images.data,
            text: 'Chúng ta sẽ cùng hoàn thành ý tưởng của bạn một cách hoàn hảo nhất...',
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <ImageSlider slider={slider}></ImageSlider>
            <div className={cx('container')}>
                <div className={cx('header')}>
                    <p className={cx('header-title')}>DỊCH VỤ THIẾT KẾ WEBSITE CHUYÊN NGHIỆP - NOLOCE</p>
                    <p className={cx('header-text')}>Chúng tôi có thể giúp gì cho bạn...</p>
                </div>
                <div className={cx('content')}>
                    <div className={cx('content-img')}>
                        <img src={images.data} alt=""></img>
                    </div>
                    <div className={cx('descreption')}>
                        <h4>Xây dựng giao diện người dùng theo yêu cầu của bạn</h4>
                        <p>
                            Với tiêu chí tạo giá trị đích thực cho khách hàng, chúng tôi luôn muốn hợp tác tạo ra một
                            sản phẩm đặc trưng riêng đối với mỗi khách hàng, là một cửa hàng online thực sự của khách
                            hàng.
                        </p>
                    </div>
                </div>

                <div className={cx('content')}>
                    <div className={cx('descreption')}>
                        <h4>Ngôn ngữ thiết kế hiện đại, đáp ứng tốc độ truy cập tối ưu</h4>
                        <p>
                            Các dự án được thực hiện bằng các ngôn ngữ xu hướng trong thời gian gần đây, nhất là xây
                            dựng website 1 trang, không tải lại trang trong quá trình sử dụng, đảm bảo tốc độ tối ưu cho
                            người sử dụng, nâng cao trải nghiệm người dùng.
                        </p>
                    </div>
                    <div className={cx('content-img')}>
                        <img src={images.data} alt=""></img>
                    </div>
                </div>

                <div className={cx('content')}>
                    <div className={cx('content-img')}>
                        <img src={images.data} alt=""></img>
                    </div>

                    <div className={cx('descreption')}>
                        <h4>
                            Tư vấn nhiệt tình, chân thành trong quá trình xây dựng, phát triển Webstie, đưa tiêu chí uy
                            tín lên hàng đầu
                        </h4>
                        <p>
                            Tư vấn khách hàng trong vấn đề xây dựng website, phát triển kinh doanh trên các nền tảng
                            khác, bên cạnh đó, đồng hành cùng khách hàng trong quá trình phát triển, bảo dưỡng Website.
                        </p>
                    </div>
                </div>

                <div className={cx('content')}>
                    <div className={cx('descreption')}>
                        <h4>Đảm bảo an toàn dữ liệu, Bảo mật thông tin khi website được đưa vào hoạt động thực tế.</h4>
                        <p>
                            Áp dụng các biện pháp bảo mật website theo các tiêu chuẩn quốc tế, bảo mật hệ thống dữ liệu,
                            chống lại sự tấn công từ các mối đe dọa.
                        </p>
                    </div>
                    <div className={cx('content-img')}>
                        <img src={images.data} alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Website;
