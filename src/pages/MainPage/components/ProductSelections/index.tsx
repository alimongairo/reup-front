import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import cx from './index.module.scss';
import { Button } from "../../../../components/ui";
import { type Swiper as SwiperRef } from 'swiper'
import { ReactComponent as ArrowIcon } from '../../../../../static/images/icons/arrows/default.svg';
import cls from 'classnames';
import ProductItem from "../../../../components/ProductItem";
import { uid } from "react-uid";
import '../../../../styles/swipe.scss';

export default function ProductSelections() {
    const [windowWidth, setWindowWidth] = useState(
        window.innerWidth,
    );

    const productsPlug = Array(27).fill(null);

    const swiperRef = useRef<SwiperRef>();

    const onPrevClick = useCallback(
        () => {
            swiperRef.current?.slidePrev()
        },
        [swiperRef],
    )

    const onNextClick = useCallback(
        () => {
            swiperRef.current?.slideNext()
        },
        [swiperRef],
    )

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    useEffect(() => {
        if(windowWidth<=758){
            swiperRef.current?.destroy();
        } else {
            swiperRef.current?.init();
        }
        
    }, [windowWidth])


    return (
        <div className={cls(cx.wrapper, 'swipe')}>
            <Swiper
                spaceBetween={24}
                slidesPerView={6}
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="swipe"
            >

                {
                    productsPlug.map((_, index) => <SwiperSlide key={uid(index)} className={cx.slide}><ProductItem size="inSwiper"/></SwiperSlide>)
                }


            </Swiper>

            <div className={cx.nav}>
                <Button onClick={onPrevClick} className={cx.prevBtn}><ArrowIcon fill="#000000" stroke="#000000" /></Button>
                <Button onClick={onNextClick} className={cx.nextBtn}><ArrowIcon fill="#000000" stroke="#000000" /></Button>
            </div>
        </div>
    )
}
