import React from 'react'
import cx from './index.module.scss';
import { Image, MoreLink, Typography } from "../../../../components/ui";

export default function Top() {
  return (
    <div className={cx.wrapper}>
      <Image className={cx.mainImg} />
      <Image className={cx.topImg} />

      {/* <div className={cx.info}>
        <div> */}
      <div className={cx.info}>
        <Typography variant="h1" className={cx.title}>новый бренд</Typography>
        <Typography variant="h2">kichka</Typography>
        <div className={cx.sub}>
        <p>Наше дело не так однозначно, как может показаться: существующая теория напрямую зависит от стандартных подходов. Идейные соображения высшего порядка, а также разбавленное изрядной долей </p>
        <MoreLink />
        </div>
      </div>
      {/* </div>

      </div> */}
    </div>
  )
}
