import React from 'react'
import cx from './index.module.scss';
import { Button, Typography } from "../../../../ui";
import { ReactComponent as RightArrowIcon } from '../../../../../../static/images/icons/arrows/default.svg';
import { EditableImage } from "../../../components";
import cls from 'classnames';

interface Iprops {
  isEditing: boolean,
  isEditable: boolean,
}

// TODO: компонент картинки или добавления is
export default function SchemeLayout({ isEditing, isEditable }: Iprops) {
  return (
    <div className={cx.wrapper}>
      <div className={cx.top}>
        <EditableImage isEditing={isEditing} className={cx.image} />
      </div>

      <div className={cls(cx.logo, {
        [cx.isEditable]: isEditable,
      })}>
        <EditableImage isEditing={isEditing} className={cx.image} />
      </div>

      <div className={cx.counter}>
        <div className={cx.card}>
          <Typography variant="h3">заголовок</Typography>
          <p>текстовый блок</p>
          <EditableImage isEditing={isEditing} className={cx.image}/>
        </div>
        <div className={cx.main}>
          <EditableImage isEditing={isEditing} className={cx.image} />
          <div className={cx.txt}>
            <Typography variant="h3">текст</Typography>
          </div>
        </div>
        <div className={cx.card}>
          <Typography variant="h3">о нас</Typography>
          <p>текстовый блок</p>
        </div>
      </div>
    </div>


  )
}
