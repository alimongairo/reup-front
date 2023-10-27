import React, { useRef, useState, useCallback, useEffect } from 'react'
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import SwiperConstructor, { type Swiper as SwiperRef } from 'swiper'
import { Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@/styles/pagination.scss';
import { uid } from "react-uid";
import cx from './index.module.scss';
import cls from 'classnames';
import { Button, Image, MoreLink, Typography } from "@/components/ui";

export default function ReupChoosen() {
    const [activeIndex, setActiveIndex] = useState(0);

    const list = Array(3).fill(null);

    const swiperRef = useRef<SwiperRef>();

    const swiperSettings = {
        slidesPerView: 1,
        // breakpoints: {
        //     // when window width is >= 759px (min-width)
        //     759: {
        //         slidesPerView: 1.1,
        //     }
        // },
    };

    const enableSwiper = () => {
        const mySwiper = new SwiperConstructor(swiperRef.current as any, swiperSettings);
        mySwiper.init();
    };

    useEffect(() => {
        enableSwiper();
    }, [])

    return (
        <div className={cx.slider}>
            <SwiperComponent
                modules={[Pagination]}
                pagination={{ clickable: true }}
                className={cx.slides}
                onBeforeInit={({ el }: any) => {
                    swiperRef.current = el;
                }}
                onSlideChange={(swiper) => {
                    // TODO: хз как отцентрировать
                    setActiveIndex(swiper.activeIndex);
                    console.log(swiper.el.style)
                }}
            >
                {
                    list.map((_, index) =>
                        <SwiperSlide key={uid(index)} className={cls(cx.slide, {
                            [cx.active]: index === activeIndex,
                        })}>

                            <div className={cx.text}>
                                <Typography variant="h2">BEFREE</Typography>
                                <p className={cx.sub}>
                                    Наше дело не так однозначно, как может показаться: существующая
                                    теория напрямую зависит от стандартных подходов. Идейные
                                    соображения высшего порядка, а также разбавленное изрядной долей{' '}
                                </p>
                                <MoreLink className={cx.moreBtn} />
                            </div>
                            <Image alt={'img'} className={cx.imgWrapper} />


                        </SwiperSlide>
                    )
                }
            </SwiperComponent>
        </div>
    )
}
