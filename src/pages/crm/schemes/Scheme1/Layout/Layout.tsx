import React from 'react'
import cx from './index.module.scss';
import { Image, Typography } from "../../../../../components/ui";

export default function Layout() {
  return (
    <div className={cx.wrapper}>
      <div className={cx.top}>
        <div className={cx.title}>
          <Typography variant="h2">Balenciaga</Typography>
          <p>Текст описание от бренда</p>
        </div>
        <Image src={process.env.VITE_PUBLIC_PLACEHOLDER_IMAGE} alt="placeholder" className={cx.image}/>

      </div>
    </div>

  )
}
