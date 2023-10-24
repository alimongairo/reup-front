import React from 'react'
import cx from './index.module.scss';
import { Image, MoreLink, Typography } from "@/components/ui";
import img1 from 'S#/images/hardcode/main/top1.png';
import img2 from 'S#/images/hardcode/main/top2.png';

export default function Top() {
  return (
    <div className={cx.wrapper}>
      <Image className={cx.mainImg} src={img1}/>
      <Image className={cx.topImg} src={img2}/>
      <div className={cx.info}>
        <Typography variant="h1" className={cx.title}>новый бренд</Typography>
        <Typography variant="h2">kichka</Typography>
        <div className={cx.sub}>
          <p>Наше дело не так однозначно, как может показаться: существующая теория напрямую зависит от стандартных подходов. Идейные соображения высшего порядка, а также разбавленное изрядной долей </p>
          <MoreLink />
        </div>
      </div>
    </div>
  )
}
