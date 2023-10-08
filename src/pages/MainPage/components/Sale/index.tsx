import React from 'react';
import { MoreLink, Typography } from "../../../../components/ui";
import cx from './index.module.scss';

export default function Sale() {
  return (
    <div className={cx.wrapper}>
      <div className={cx.card}></div>

      <div className={cx.card}>
        <div className={cx.info}>
          <Typography variant="h3">title</Typography>
          <MoreLink className={cx.moreBtn} text="узнать больше"/>
        </div>
      </div>

      <div className={cx.card}></div>

      <div className={cx.card}>
        <div className={cx.info}>
          <Typography variant="h3">title</Typography>
          <MoreLink className={cx.moreBtn} text="узнать больше"/>
        </div>
      </div>

      <div className={cx.card}></div>

      <div className={cx.card}>
        <div className={cx.info}>
          <Typography variant="h3">title</Typography>
          <MoreLink className={cx.moreBtn} text="узнать больше"/>
        </div>
      </div>
    </div>
  )
}
