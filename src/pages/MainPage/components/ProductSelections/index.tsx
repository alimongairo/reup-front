import React, { useCallback, useRef } from 'react';
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

export default function ProductSelections() {
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

    return (
        <div className={cx.wrapper}>
            <Swiper


                spaceBetween={24}
                slidesPerView={6}

                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                
                {/* <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide> */}

                {/* <SwiperSlide key={uid(index)}><ProductItem  /></SwiperSlide> */}

                {
                    productsPlug.map((_, index) => <SwiperSlide key={uid(index)}><ProductItem  /></SwiperSlide>)
                }


            </Swiper>
            <div className={cx.nav}>
                <Button onClick={onPrevClick} className={cx.prevBtn}><ArrowIcon fill="#000000" stroke="#000000" /></Button>
                <Button onClick={onNextClick} className={cx.nextBtn}><ArrowIcon fill="#000000" stroke="#000000" /></Button>
            </div>
        </div>
    )
}
