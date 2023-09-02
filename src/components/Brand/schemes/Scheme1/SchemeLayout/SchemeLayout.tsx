import React from 'react'
import cx from './index.module.scss';
import { Button, Typography } from "../../../../ui";
import { ReactComponent as RightArrowIcon } from '../../../../../../static/images/icons/arrows/right.svg';
import { EditableImage, Slider, ISlide } from "../../../components";

interface Iprops {
  isEditing: boolean,
}

export default function SchemeLayout({ isEditing }: Iprops) {

  const slides: [ISlide, ISlide] = [
    {
      title:
        '1 название бренда',
    },
    {
      title: 'о нас',
      description: 'о нас',
    },
  ];

  return (
    <div className={cx.wrapper}>
      {/* <div className={cx.top}>
        <EditableImage className={cx.image} isEditing={isEditing} />
        <Typography variant="h2" className={cx.title}>название бренда</Typography>
      </div> */}


      <Slider slides={slides} />


      <div className={cx.links}>
        <div className={cx.bricks}>
          <Typography variant="h3">категории товаров</Typography>
          <Button variant="contained" endIcon={<RightArrowIcon />}>больше</Button>
        </div>
        <div className={cx.main}>
          <Typography variant="h3">Заголовок 1</Typography>
          <p>текстовый блок</p>
        </div>
      </div>

      <div className={cx.gallery}>
        <EditableImage className={cx.image} isEditing={isEditing} />
        <EditableImage className={cx.image} isEditing={isEditing} />
        <EditableImage className={cx.image} isEditing={isEditing} />
        <div className={cx.title}>
          <Typography variant="h3">заголовок</Typography>
          <p>основной текст</p>
        </div>

      </div>

    </div>
  )
}
