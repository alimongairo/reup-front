import React from 'react';
import { Image, MoreLink, Typography } from "@/components/ui";
import img1 from 'S#/images/hardcode/main/sale1.png';
import img2 from 'S#/images/hardcode/main/sale2.png';
import img3 from 'S#/images/hardcode/main/sale3.png';
import cls from 'classnames';
import cx from './index.module.scss';

export default function Sale() {
  return (
    <div className={cx.wrapper}>
      
      <Image className={cx.item} src={img1}/>

      <div className={cls(cx.item, cx.card, cx.right, cx.desktop)}>
          <Typography variant="h3">большая распродажа зимней коллекции -40% на все товары</Typography>
          <MoreLink className={cx.moreBtn} text="узнать больше"/>
      </div>

      <Image className={cx.item} src={img2}/>

      <div className={cls(cx.item, cx.card, cx.green)}>
          <Typography variant="h3">скидки 20% на аксессуары</Typography>
          <MoreLink className={cx.moreBtn} text="узнать больше"/>
      </div>

      <Image className={cx.item} src={img3}/>

      <div className={cls(cx.item, cx.card, cx.right, cx.primary)}>
          <Typography variant="h3">скидки 20% на аксессуары</Typography>
          <MoreLink className={cx.moreBtn} text="узнать больше"/>
      </div>
    </div>
  )
}
