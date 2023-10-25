import React, { useState } from 'react';
import cls from 'classnames';
import { Typography, Button, Collapse, Image, Tooltip } from '@/components/ui'
import { uid } from "react-uid";
import { Link } from "react-router-dom";
import { ERoutes } from "@/router/config";
import { EFontFamily } from "@/components/ui";
import InfoTable from "../InfoTable";
import '@/styles/scroll.scss';
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
]

export default function ProductInfo({ className }: IProps) {
  const [activeImg, setActiveImg] = useState(0);
  const [acc, setAcc] = useState(0);

  return (
    <div className={cls(cx.wrapper, className)}>

      <div className={cx.imgContainer}>
        <div className={cx.content}>
          <div className={cls(cx.slider, "scroll scroll-vertical as-desktop")}>
            {
              mockImages.map((src, idx) =>
                <button 
                  onClick={() => {setActiveImg(idx); setAcc(idx)}} key={uid(src)} 
                  onMouseEnter={() => setActiveImg(idx)}
                  onMouseLeave={() => setActiveImg(acc)}  
                >
                  <Image className={cls(cx.sliderImg, {[cx.active]: idx === acc})} src={src} />
                </button>
              )
            }
          </div>
          <div className={cx.mainImgWrapper}>
            <Image className={cx.img} src={mockImages[activeImg]} />
            <Tooltip title="на модели с фото размер S " className={cx.tooltip}/>
          </div>
        </div>

       
      </div>



      <div className={cx.info}>
        <Typography variant="h2">Блузка женская “Лэйди”</Typography>
        <Typography variant="h5">Befree</Typography>
        <p className={cx.note}>03289</p>
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

        <Button className={cx.buyBtn}>купить сейчас</Button>

        <div className={cx.detailsTitle}>
          <Link to={ERoutes.Default} style={{ textDecoration: 'underline' }}><Typography variant="h6">характеристики</Typography></Link>
        </div>

        <div>
          <div className={cx.block}>
            <Collapse
              title={<Typography variant="h5" fontFamily={EFontFamily.GILROY}>описание</Typography>}
              content={<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores sequi, odio tenetur dolorem sint debitis molestias eligendi veniam dignissimos! Distinctio praesentium fugit possimus doloremque saepe mollitia voluptatum eos aliquam quo?</p>}
              moreText={<Link to={ERoutes.Default} style={{ textDecoration: 'underline', pointerEvents: 'none' }} className={cx.more}><Typography variant="h6">показать больше</Typography></Link>}
              lessText={<Link to={ERoutes.Default} style={{ textDecoration: 'underline', pointerEvents: 'none' }} className={cx.more}><Typography variant="h6">свернуть</Typography></Link>}
              hideCollapseIcon
            />
          </div>

          <div className={cx.block}>
            <Collapse
              title={<Typography variant="h5" fontFamily={EFontFamily.GILROY}>о товаре</Typography>}
              content={<InfoTable />}
              className={cx.infoTable}
            />

            <div>
              <Link to={ERoutes.Default} style={{ textDecoration: 'underline' }}><Typography variant="h6">таблица размеров</Typography></Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
