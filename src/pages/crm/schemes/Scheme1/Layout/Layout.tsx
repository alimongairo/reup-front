import React from 'react'
import cx from './index.module.scss';
import { Typography } from "@mui/material";

export default function Layout() {
  return (
    <div className={cx.wrapper}>
      <div className={cx.top}>
        <div className={cx.title}>
          <Typography variant="h2">Balenciaga</Typography>
          <p>Текст описание от бренда</p>
        </div>

      </div>
    </div>

    // TODO: product list with filters.png
  )
}
