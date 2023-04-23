import classNames from 'classnames/bind';
import styles from './ImageSlider.module.scss';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function ImageSlider({ slider }) {
    const [imageActive, setImageActive] = useState(0);

    const handleNext = () => {
        if (imageActive < slider.length - 1) {
            setImageActive(imageActive + 1);
        } else {
            setImageActive(0);
        }
    };

    const handlePre = () => {
        if (imageActive > 0) {
            setImageActive(imageActive - 1);
        } else {
            setImageActive(slider.length - 1);
        }
    };

    useEffect(() => {
        const autoPlay = setTimeout(() => {
            handleNext();
        }, 3000);

        return () => {
            clearTimeout(autoPlay);
        };
        //  eslint-disable-next-line
    }, [imageActive]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('btn-left')} onClick={handlePre}>
                <BsChevronLeft className={cx('btn-icon')} />
            </div>

            <div className={cx('slider-container')}>
                {slider.map((item, index) => (
                    <div key={index} className={cx('slider-item', imageActive === index && 'active')}>
                        <img src={item.img} alt="" className={cx('slider-img')}></img>
                        <p className={cx('slider-text')}>{item.text}</p>
                    </div>
                ))}
            </div>

            <div className={cx('btn-right')} onClick={handleNext}>
                <BsChevronRight className={cx('btn-icon')} />
            </div>
        </div>
    );
}

export default ImageSlider;
