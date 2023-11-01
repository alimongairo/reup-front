import React, { useCallback, useEffect, useRef, useState } from 'react';
/* eslint-disable-next-line import/no-unresolved*/
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Button } from '@/components/ui';
import SwiperConstructor, { type Swiper as SwiperRef } from 'swiper';
import { ReactComponent as ArrowIcon } from 'S#/images/icons/arrows/default.svg';
import cls from 'classnames';
import ProductItem from '@/components/ProductItem';
import { uid } from 'react-uid';
import { useWindowWidth } from '@/hooks';
/* eslint-disable-next-line import/no-unresolved*/
import 'swiper/css';
/* eslint-disable-next-line import/no-unresolved*/
import 'swiper/css/navigation';
import '@/styles/swipe.scss';
import cx from './index.module.scss';

interface IProductSLiderProps {
    list?: any[];
}

export default function ProductSlider({
    list = Array(27).fill(null),
}: IProductSLiderProps) {
    const windowWidth = useWindowWidth();

    const swiperRef = useRef<SwiperRef>();

    const swiperSettings = {
        breakpoints: {
            1700: {
                slidesPerView: 6,
                spaceBetween: 24,
            },
            1300: {
                slidesPerView: 5,
                spaceBetween: 24,
            },
            // when window width is >= 759px (min-width)
            759: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
        },
    };

    const [swiperInstance, setSwiperInstance] = useState<any>();

    const enableSwiper = () => {
        const mySwiper = new SwiperConstructor(
            swiperRef.current as any,
            swiperSettings
        );
        mySwiper.init();
        setSwiperInstance(mySwiper);
    };

    useEffect(() => {
        enableSwiper();
        /* eslint-disable-next-line react-hooks/exhaustive-deps */
    }, []);

    useEffect(() => {
        if (!windowWidth) return;
        if (windowWidth <= 758) {
            swiperInstance.destroy();
        } else {
            enableSwiper();
        }
        /* eslint-disable-next-line react-hooks/exhaustive-deps */
    }, [windowWidth]);

    const onPrevClick = useCallback(() => {
        swiperInstance?.slidePrev();
    }, [swiperInstance]);

    const onNextClick = useCallback(() => {
        swiperInstance?.slideNext();
    }, [swiperInstance]);
    return (
        <div className={cx.wrapper}>
            <SwiperComponent
                className={cls(cx.swiper, 'swipe')}
                onBeforeInit={({ el }: any) => {
                    swiperRef.current = el;
                }}
            >
                {list.map((_, index) => (
                    <SwiperSlide key={uid(index)} className={cx.slide}>
                        <ProductItem size="apativeSize" />
                    </SwiperSlide>
                ))}
            </SwiperComponent>

            <div className={cx.nav}>
                <Button onClick={onPrevClick} className={cx.prevBtn}>
                    <ArrowIcon fill="#000000" stroke="#000000" />
                </Button>
                <Button onClick={onNextClick} className={cx.nextBtn}>
                    <ArrowIcon fill="#000000" stroke="#000000" />
                </Button>
            </div>
        </div>
    );
}
