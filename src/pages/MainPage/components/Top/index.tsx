import React from 'react'
import cx from './index.module.scss';
import { Image, MoreLink, Typography } from "../../../../components/ui";

export default function Top() {
  return (
    <div className={cx.wrapper}>
      <Image className={cx.mainImg} />
      <Image />
      <Typography variant="h1">новый бренд</Typography>
      <div>
        <div>
          <Typography variant="h2">kichka</Typography>
          <p>Наше дело не так однозначно, как может показаться: существующая теория напрямую зависит от стандартных подходов. Идейные соображения высшего порядка, а также разбавленное изрядной долей </p>
        </div>
        <MoreLink />
      </div>
    </div>
  )
}
