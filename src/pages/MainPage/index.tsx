import { useState } from 'react'
import { MainLayout } from "@/layouts"
import { Collections, ProductSlider, ReupChoosen, Sale, Top } from "./components"
import { Bricks, EBrickAlign, IBrick, MoreLink, Typography } from "@/components/ui"
import { ReactComponent as  Upcycle1} from "S#/images/hardcode/main/upcycle/upcycle1.svg";
import { ReactComponent as  Upcycle2} from "S#/images/hardcode/main/upcycle/upcycle2.svg";
import { ReactComponent as  Upcycle3} from "S#/images/hardcode/main/upcycle/upcycle3.svg";
import { ReactComponent as  Upcycle4} from "S#/images/hardcode/main/upcycle/upcycle4.svg";
import { ReactComponent as  Upcycle5} from "S#/images/hardcode/main/upcycle/upcycle5.svg";
import { ReactComponent as  Upcycle6} from "S#/images/hardcode/main/upcycle/upcycle6.svg";
import { ERoutes } from "@/router/types"
import Marquee from 'react-fast-marquee';
import cx from './index.module.scss';

const bricksListMock: IBrick[] = [
  {
    label: 'Верхняя одежда',
    link: ERoutes.Default,
    align: EBrickAlign.Right,
  },
  {
    label: 'Обувь',
    link: ERoutes.Default,
    align: EBrickAlign.Right,
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
    align: EBrickAlign.Center,
  },
  {
    label: 'Рубашки',
    link: ERoutes.Default,
    align: EBrickAlign.Center,
  },
  {
    label: 'Платья',
    link: ERoutes.Default,
    align: EBrickAlign.Right,
  },
  {
    label: 'Костюмы',
    link: ERoutes.Default,
    align: EBrickAlign.Right,
  },
];

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
        <Marquee gradient={false} speed={60} className={cx.line} >
          <Upcycle1 />
          <Upcycle2 />
          <Upcycle3 />
          <Upcycle4 />
          <Upcycle5 />
          <Upcycle6 />
        </Marquee></div>

      <div className={cx.selection}>
        <ProductSlider />
        <MoreLink className={cx.moreBtn} />
      </div>

      <Sale />

    </MainLayout>
  )
}
