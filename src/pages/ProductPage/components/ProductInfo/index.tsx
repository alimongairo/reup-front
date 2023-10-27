import React, { useState } from 'react';
import cls from 'classnames';
import { Typography, Button, Collapse, Image, Tooltip, Fav } from '@/components/ui'
import { uid } from "react-uid";
import { Link } from "react-router-dom";
import { ERoutes } from "@/router/config";
import { EFontFamily } from "@/components/ui";
import InfoTable from "../InfoTable";
import cx from './index.module.scss';

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

interface IProps {
  className?: string;
};

// mock
const mockImages = [
  "https://i.ibb.co/kqTTgLy/beautiful-cat-portrait-close-up-1.jpg",
  "https://i.ibb.co/MP1dZ3x/beautiful-cat-portrait-close-up.jpg",
  "https://i.ibb.co/1nxgCv6/isolated-closeup-shot-of-a-gray-cat-looking-into-the-camera.jpg",
  "https://i.ibb.co/6BKsZmC/the-cat-on-white-background.jpg",
  "https://i.ibb.co/kqTTgLy/beautiful-cat-portrait-close-up-1.jpg",
  "https://i.ibb.co/MP1dZ3x/beautiful-cat-portrait-close-up.jpg",
  "https://i.ibb.co/1nxgCv6/isolated-closeup-shot-of-a-gray-cat-looking-into-the-camera.jpg",
  "https://i.ibb.co/6BKsZmC/the-cat-on-white-background.jpg",
  "https://i.ibb.co/kqTTgLy/beautiful-cat-portrait-close-up-1.jpg",
  "https://i.ibb.co/MP1dZ3x/beautiful-cat-portrait-close-up.jpg",
  "https://i.ibb.co/1nxgCv6/isolated-closeup-shot-of-a-gray-cat-looking-into-the-camera.jpg",
  "https://i.ibb.co/6BKsZmC/the-cat-on-white-background.jpg",
  "https://i.ibb.co/kqTTgLy/beautiful-cat-portrait-close-up-1.jpg",
  "https://i.ibb.co/MP1dZ3x/beautiful-cat-portrait-close-up.jpg",
  "https://i.ibb.co/1nxgCv6/isolated-closeup-shot-of-a-gray-cat-looking-into-the-camera.jpg",
  "https://i.ibb.co/6BKsZmC/the-cat-on-white-background.jpg",
]

export default function ProductInfo({ className }: IProps) {
  const [activeImg, setActiveImg] = useState(1);
  const [acc, setAcc] = useState(1);

  return (
    <div className={cls(cx.wrapper, className)}>

      <div className={cx.content}>
        <div className={cls(cx.images, "as-desktop")}>
          {
            mockImages.map((src, idx) =>
              idx >= 2
                ? (<button
                  onClick={() => { setActiveImg(idx); setAcc(idx) }}
                  key={uid(src, idx)}
                  onMouseEnter={() => setActiveImg(idx)}
                  onMouseLeave={() => setActiveImg(acc)}
                >
                  <Image src={src} className={cls(cx.subImg, { [cx.active]: idx === acc })} />
                </button>)
                : idx === 1
                  ? (<div className={cx.mainImgWrapper} key={uid(src, idx)}>
                    <Image src={mockImages[activeImg]} className={cx.mainImg} />
                    <Tooltip title="на модели с фото размер S " className={cx.tooltip} />
                  </div>)
                  : (<div className={cx.mainImgWrapper} key={uid(src, idx)}>
                    <Image src={src} className={cx.mainImg} />
                    <Tooltip title="на модели с фото размер S " className={cx.tooltip} />
                  </div>)
            )

          }
        </div>
      </div>

      <div className={cx.info}>
        <Typography variant="h2">Блузка женская “Лэйди”</Typography>
        <Typography variant="h5" className={cx.brand}>Befree</Typography>
        <div className={cx.price}>
          <Typography variant="h3" fontFamily={EFontFamily.GILROY}>3990</Typography>
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

        <div className={cx.sizesLink}>
          <Link to={ERoutes.Default} style={{ textDecoration: 'underline' }}><Typography variant="h6">таблица размеров</Typography></Link>
        </div>

        <div className={cx.actions}>
          <Button className={cx.buyBtn}>купить сейчас</Button>
          <Button className={cx.basketBtn}>в корзину</Button>
          <Button className={cls(cx.favBtn, 'as-desktop')} ><Fav isActive={false} isInBtn={true}/></Button>
        </div>

        <div>
          <div className={cx.block}>
            <Collapse
              title={<Typography variant="h5" fontFamily={EFontFamily.GILROY}>описание</Typography>}
              content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. 
                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. 
                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. 
                Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. 
                Aenean leo ligula, porttitor eu, "
              className={cx.infoTable}
            />
          </div>

          <div className={cx.block}>
            <Collapse
              title={<Typography variant="h5" fontFamily={EFontFamily.GILROY}>о товаре</Typography>}
              content={<InfoTable />}
              className={cx.infoTable}
            />
          </div>

          <Button className={cx.characteristics}>характеристики</Button>
        </div>

  
      </div>
    </div>
  )
}
