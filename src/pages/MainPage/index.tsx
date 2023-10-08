import React, { useState } from 'react'
import { MainLayout } from "../../layouts"
import { Collections, ProductSlider, ReupChoosen, Sale, Top } from "./components"
import { Bricks, EAlign, IBrick, MoreLink, Typography } from "../../components/ui"
import { ERoutes } from "../../app/router/types"
import Marquee from 'react-fast-marquee';
import cx from './index.module.scss';

const bricksListMock: IBrick[] = [
  {
    label: 'Верхняя одежда',
    link: ERoutes.Default,
    align: EAlign.Right,
  },
  {
    label: 'Обувь',
    link: ERoutes.Default,
    align: EAlign.Right,
  },
  {
    label: 'Штаны',
    link: ERoutes.Default,
  },
  {
    label: 'Аксессуары',
    link: ERoutes.Default,
  },
  {
    label: 'Сумки',
    link: ERoutes.Default,
    align: EAlign.Center,
  },
  {
    label: 'Рубашки',
    link: ERoutes.Default,
    align: EAlign.Center,
  },
  {
    label: 'Платья',
    link: ERoutes.Default,
    align: EAlign.Right,
  },
  {
    label: 'Костюмы',
    link: ERoutes.Default,
    align: EAlign.Right,
  },
]

export default function MainPage() {
  const [bricksList] = useState<IBrick[]>(bricksListMock);

  return (
    <MainLayout>
      <Top />
      <Bricks list={bricksList} className={cx.bricks} />
      <Typography variant="h1">новый бренд</Typography>

      <div className={cx.selection}>
        <ProductSlider />
        <MoreLink className={cx.moreBtn} />
      </div>

      <ReupChoosen />
      <Collections />

      <div className={cx.fav}>
        <Typography variant="h1">мне нравится</Typography>
        <ProductSlider />
        <MoreLink className={cx.moreBtn} />
      </div>

      <div className={cx.marquee}>
        <Marquee gradient={false} speed={60} >
          <div>dfsddsd</div>
          <div>dfsddsd</div>
          <div>dfsddsd</div>
          <div>dfsddsd</div>
        </Marquee></div>

      <div className={cx.selection}>
        <ProductSlider />
        <MoreLink className={cx.moreBtn} />
      </div>

      <Sale />

    </MainLayout>
  )
}
