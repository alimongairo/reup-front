import React, { useState } from 'react'
import cx from './index.module.scss';
import { Button, Typography } from "../../../../ui";
import { ReactComponent as RightArrowIcon } from '../../../../../../static/images/icons/arrows/default.svg';
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

  const categories = ["cat1", "cat2", "cat3"];
  const [bricks, setBricks] = useState(categories);

  const onBrickRemove = (index: number) => {

    console.log(index)
    setBricks((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div className={cx.wrapper}>

      <Slider slides={slides} isEditing={isEditing} />

      <div className={cx.links}>
        <div className={cx.bricks}>
          <Typography variant="h3">категории товаров</Typography>
          <Button variant="contained" endIcon={<RightArrowIcon />} colorM="black">больше</Button>

          <div className={cx.bricksList}>
            {
              bricks.map((item, index) => (
                <Button key={uid(item, index)} className={cx.brick} endIcon={isEditing ? <CrossIcon onClick={() => onBrickRemove(index)} /> : null} iconName="cross" colorM="black">{item}</Button>
              ))
            }
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
