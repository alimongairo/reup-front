import React from 'react';
import cx from './index.module.scss';
import { Typography, Button } from '../../../../components/ui'
import { uid } from "react-uid";
import { Link } from "react-router-dom";
import { ERoutes } from "../../../../app/router/config";

// mock
const sizesMock = [
  {
    label: "40-42",
    isInStock: true,
  },
  {
    label: "42-44",
    isInStock: true,
  },
  {
    label: "44-46",
    isInStock: false,
  },
  {
    label: "46-48",
    isInStock: true,
  },
];

export default function ProductInfo() {
  return (
    <div className={cx.wrapper}>
      <div className={cx.img}></div>
      <div className={cx.info}>
        <Typography variant="h2">Блузка женская “Лэйди”</Typography>
        <Typography variant="h5">Befree</Typography>
        <p className={cx.note}>03289</p>
        <div className={cx.price}>
          <Typography variant="h3">3990</Typography>
          <Typography variant="h2">1990</Typography>
        </div>
        <Typography variant="h6">выберите размер</Typography>

        <div className={cx.sizeList}>
          {
            sizesMock.map((size) => {
              return (<Button key={uid(size.label)} className={cx.sizeBtn} disabled={!size.isInStock}>{size.label}</Button>)
            })
          }
        </div>

        <Button className={cx.buyBtn}>купить сейчас</Button>

        <div>
          <Link to={ERoutes.Default}><Typography variant="h6">Характеристики</Typography></Link>
        </div>

      </div>
    </div>
  )
}
