import React from 'react'
import cx from './index.module.scss';
import { Button, Image, Typography } from "../../../../../components/ui";
import { ReactComponent as RightArrowIcon } from '../../../../../../static/images/icons/arrows/right.svg';

export default function Layout() {
  return (
    <div className={cx.wrapper}>
      <div className={cx.top}>
        <div className={cx.title}>
          <Typography variant="h2">Balenciaga</Typography>
          <p>Текст описание от бренда</p>
        </div>
        <div className={cx.pic}>
          <Image src={process.env.VITE_PUBLIC_PLACEHOLDER_IMAGE} alt="placeholder" className={cx.image} />
          <div className={cx.links}><ul className={cx.list}><li><p>text</p></li><li><p>text</p></li><li><p>text</p></li></ul><Button variant="contained" endIcon={<RightArrowIcon />}>больше</Button></div>
        </div>
      </div>

      <div className={cx.banner}>
        <Typography variant="h2">создай свой уникальный образ вместе с Balenciaga</Typography>
        <Button variant="contained" endIcon={<RightArrowIcon />}>перейти к товарам</Button>
      </div>

      <div className={cx.gallery}>
        <Image src={process.env.VITE_PUBLIC_PLACEHOLDER_IMAGE} alt="placeholder" className={cx.image} />
        <Image src={process.env.VITE_PUBLIC_PLACEHOLDER_IMAGE} alt="placeholder" className={cx.image} />
        <Image src={process.env.VITE_PUBLIC_PLACEHOLDER_IMAGE} alt="placeholder" className={cx.image} />
        <Image src={process.env.VITE_PUBLIC_PLACEHOLDER_IMAGE} alt="placeholder" className={cx.image} />
        <div className={cx.title}>
          <Typography variant="h3">заголовок</Typography>
          <p>основной текст</p>
        </div>
        <Image src={process.env.VITE_PUBLIC_PLACEHOLDER_IMAGE} alt="placeholder" className={cx.image} />

      </div>

    </div>


  )
}
