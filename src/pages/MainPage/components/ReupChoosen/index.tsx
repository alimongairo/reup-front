import { useState } from 'react';
import classNames from 'classnames';

import { useWindowWidth } from '@/hooks';

import img from 'S#/images/hardcode/main/rc1.png';
import cx from './index.module.scss';
import { Typography } from "@mui/material";
import { MoreLink, Image } from "@/components/ui";

export interface IMainSlider {
  bgColor?: string;
}

const ReupChoosen = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const windowWidth = useWindowWidth();
  const curWidth = windowWidth ? windowWidth - 200 : 'auto';

  return (
    <div className={cx.slider}>
      <div className={cx.slides}>
        <div
          className={classNames(cx.slide, {
            [cx.active]: 0 === activeSlideIndex,
          })}
          style={{
            transform: `translateX(-${100 * activeSlideIndex}%)`,
            width: curWidth,
          }}
          onClick={() => setActiveSlideIndex(0)}
        >
          <div className={cx.text}>
            <Typography variant="h2">BEFREE</Typography>
            <p className={cx.sub}>
              Наше дело не так однозначно, как может показаться: существующая
              теория напрямую зависит от стандартных подходов. Идейные
              соображения высшего порядка, а также разбавленное изрядной долей{' '}
            </p>
            <MoreLink className={cx.moreBtn} />
          </div>
          <Image src={img} alt={'img'} className={cx.imgWrapper} />

        </div>
        <div
          className={classNames(cx.slide, {
            [cx.active]: 1 === activeSlideIndex,
          })}
          style={{
            transform: `translateX(-${100 * activeSlideIndex}%)`,
            width: curWidth,
          }}
          onClick={() => setActiveSlideIndex(1)}
        >
          <div className={cx.text}>
            <Typography variant="h2">BEFREE</Typography>
            <p className={cx.sub}>
              Наше дело не так однозначно, как может показаться: существующая
              теория напрямую зависит от стандартных подходов. Идейные
              соображения высшего порядка, а также разбавленное изрядной долей{' '}
            </p>
            <MoreLink className={cx.moreBtn} />
          </div>

          <Image src={img} alt={'img'} className={cx.imgWrapper} />

        </div>
        <div
          className={classNames(cx.slide, {
            [cx.active]: 2 === activeSlideIndex,
          })}
          style={{
            transform: `translateX(-${100 * activeSlideIndex}%)`,
            width: curWidth,
          }}
          onClick={() => setActiveSlideIndex(2)}
        >
          <div className={cx.text}>
            <Typography variant="h2">BEFREE</Typography>
            <p className={cx.sub}>
              Наше дело не так однозначно, как может показаться: существующая
              теория напрямую зависит от стандартных подходов. Идейные
              соображения высшего порядка, а также разбавленное изрядной долей{' '}
            </p>
            <MoreLink className={cx.moreBtn} />
          </div>
          <Image src={img} alt={'img'} className={cx.imgWrapper} />
        </div>
      </div>
      <div className={cx.footer}>
        <p className={cx.countTitle}>{activeSlideIndex + 1} из 3</p>
        <div className={cx.slideCount}>
          {[1, 2, 3].map((i, index) => {
            return (
              <div
                key={index}
                onClick={() => setActiveSlideIndex(index)}
                className={classNames(cx.count, {
                  [cx.activeCount]: index === activeSlideIndex,
                })}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReupChoosen;
