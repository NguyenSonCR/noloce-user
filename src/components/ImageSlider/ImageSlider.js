import classNames from 'classnames/bind';
import styles from './ImageSlider.module.scss';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { useEffect, useState, useRef } from 'react';
import React from 'react';

const cx = classNames.bind(styles);

function ImageSlider({ slider }) {
    const [sliderInfinity, setSliderInfinity] = useState(slider);
    const [translate, setTranslate] = useState(0);
    const [active, setActive] = useState(3);
    const [transform, setTranform] = useState(true);

    useEffect(() => {
        if (transform === false && active === 3) {
            setTranform(true);
            const percent = 100 / 3;
            setTranslate(-percent.toFixed(5) * (active - 2));
            setActive((pre) => pre + 1);
        }

        if (transform === false && active === sliderInfinity.length) {
            setTranform(true);
            const percent = (100 / 3).toFixed(5);
            const oldTranlate = Number(translate);
            setTranslate(oldTranlate + Number(percent));
            setActive((pre) => pre - 1);
        }
    }, [transform, active]);

    const handleNext = () => {
        if (active === sliderInfinity.length) {
            setTranform(false);
            setActive(3);
            setTranslate(0);
            return;
        }

        if (active === sliderInfinity.length - 1) {
            const percent = 100 / 3;
            setTranslate(-percent.toFixed(5) * (active - 2));
            setActive((pre) => pre + 1);
            return;
        }

        if (active < sliderInfinity.length) {
            const percent = 100 / 3;
            setTranslate(-percent.toFixed(5) * (active - 2));
            setActive((pre) => pre + 1);
        }
    };

    const handlePre = () => {
        if (active === 3) {
            setActive(sliderInfinity.length);
            setTranform(false);
            const percent = 100 / 3;
            setTranslate(-percent.toFixed(5) * (sliderInfinity.length - 3));
            return;
        }
        if (active > 3) {
            const percent = (100 / 3).toFixed(5);
            const oldTranlate = Number(translate);
            setTranslate(oldTranlate + Number(percent));
            setActive((pre) => pre - 1);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('btn-left')} onClick={handlePre}>
                <BsChevronLeft className={cx('btn-icon')} />
            </div>

            <div
                className={cx('slider-container')}
                style={{
                    transform: `translateX(${translate}%)`,
                    transition: transform ? `transform ease-in 0.5s` : null,
                }}
            >
                {sliderInfinity.map((item, index) => (
                    <div key={index} data-index={index} className={cx('slider-item')}>
                        <img src={item.img || item.banner} alt="" className={cx('slider-img')}></img>
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
