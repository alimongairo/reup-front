import React from 'react';
import cx from './index.module.scss';
import {Typography} from "../../../../components/ui";

export default function LKOrders() {
  return (
    <div className={cx.container}>
      <Typography variant="h1">мои заказы</Typography>
    </div>
  )
}
