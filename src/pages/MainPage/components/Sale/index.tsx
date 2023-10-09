import React from 'react';
import { Image, MoreLink, Typography } from "../../../../components/ui";
import cls from 'classnames';
import cx from './index.module.scss';

export default function Sale() {
  return (
    <div className={cx.wrapper}>
      
      <Image className={cx.item}/>

      <div className={cls(cx.item, cx.card, cx.right, cx.desktop)}>
          <Typography variant="h3">большая распродажа зимней коллекции -40% на все товары</Typography>
          <MoreLink className={cx.moreBtn} text="узнать больше"/>
      </div>

      <Image className={cx.item}/>

      <div className={cls(cx.item, cx.card)}>
          <Typography variant="h3">скидки 20% на аксессуары</Typography>
          <MoreLink className={cx.moreBtn} text="узнать больше"/>
      </div>

      <Image className={cx.item}/>

      <div className={cls(cx.item, cx.card, cx.right)}>
          <Typography variant="h3">скидки 20% на аксессуары</Typography>
          <MoreLink className={cx.moreBtn} text="узнать больше"/>
      </div>
    </div>
  )
}
