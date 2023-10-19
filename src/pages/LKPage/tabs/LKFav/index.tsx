import React from 'react';
import cx from './index.module.scss';
import { Typography } from "../../../../components/ui";
import ProductItem from "../../../../components/ProductItem";
import { uid } from "react-uid";

export default function LKFav() {
  // mock
  const productsPlug = Array(27).fill(null);

  return (
    <div className={cx.container}>
      <Typography variant="h1">избранное</Typography>
      {
        productsPlug.map((_, index) => <ProductItem key={uid(index)} />)
      }
      <Typography variant="h1">вам может понравиться</Typography>
      {
        productsPlug.map((_, index) => <ProductItem key={uid(index)} />)
      }
    </div>
  )
}
