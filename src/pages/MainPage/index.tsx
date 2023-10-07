import React, { useState } from 'react'
import { MainLayout } from "../../layouts"
import { ProductSelections, ReupChoosen, Top } from "./components"
import { Bricks, EAlign, IBrick, Typography } from "../../components/ui"
import { ERoutes } from "../../app/router/types"
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
  const [bricksList, setBricksList] = useState<IBrick[]>(bricksListMock);

  return (
    <MainLayout>
      <Top />
      <Bricks list={bricksList} className={cx.bricks}/>
      <Typography variant="h1">новый бренд</Typography>
      <ProductSelections />
      {/* <ReupChoosen /> */}
    </MainLayout>
  )
}
