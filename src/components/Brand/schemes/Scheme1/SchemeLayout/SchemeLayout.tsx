import React, { useState } from 'react'
import cx from './index.module.scss';
import { Button, Typography } from "../../../../ui";
import { ReactComponent as RightArrowIcon } from '../../../../../../static/images/icons/arrows/right.svg';
import { ReactComponent as CrossIcon } from '../../../../../../static/images/icons/cross.svg';
import { EditableImage, Slider, ISlide } from "../../../components";
import { uid } from 'react-uid';

interface Iprops {
  isEditing: boolean,
}

export default function SchemeLayout({ isEditing }: Iprops) {

  const slides: [ISlide, ISlide] = [
    {
      title:
        'название бренда',
    },
    {
      title: 'о нас',
      description: "Lorem ipsum dolor sit amet consectetur. In nulla nulla velit lacinia suscipit quisque nisi. Auctor cras mattis facilisis quam dui velit ultrices.",
    },
  ];

  const categories = Array(10).fill("category");
  const [bricks, setBricks] = useState(categories);

  return (
    <div className={cx.wrapper}>

      <Slider slides={slides} isEditing={isEditing} />

      <div className={cx.links}>
        <div className={cx.bricks}>
          <Typography variant="h3">категории товаров</Typography>
          <Button variant="contained" endIcon={<RightArrowIcon />}>больше</Button>

          <div className={cx.bricksList}>
            {
              bricks.map((item, index) => (
                <Button key={uid(item, index)}>{item}<CrossIcon onClick={() => console.log('remove')}/></Button>
              )
              )}

          </div>

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
