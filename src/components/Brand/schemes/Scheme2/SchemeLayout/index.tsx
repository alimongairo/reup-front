import React from 'react'
import cx from './index.module.scss';
import { Typography } from "../../../../ui";
import { EditableImage } from "../../../components";
import cls from 'classnames';
import { styleParser } from "../../../../../helpers";

// TODO: fx any
interface IProps {
  isEditing: boolean,
  isEditable: boolean,
  data: any,
}

// TODO: компонент картинки или добавления is
export default function SchemeLayout({ isEditing, isEditable, data }: IProps) {
  return (
    <div className={cx.wrapper}>
      <div className={cx.top}>
        <EditableImage isEditing={isEditing} className={cx.image} src={data.image1_main}/>
      </div>

      <div className={cls(cx.logo, {
        [cx.isEditable]: isEditable,
      })}>
        <EditableImage isEditing={isEditing} className={cx.image} src={data.image_logo}/>
      </div>

      <div className={cx.counter}>
        <div className={cx.card}>
          <Typography variant="h3" style={styleParser(data.heading1_param)}>{data.heading1}</Typography>
          <p style={styleParser(data.text1_block_param)}>{data.text1_block}</p>
          <EditableImage isEditing={isEditing} className={cx.image} src={data.image3_left}/>
        </div>
        <div className={cx.main}>
          <EditableImage isEditing={isEditing} className={cx.image} src={data.image_header3}/>
        </div>
        <div className={cx.card}>
          <Typography variant="h3" style={styleParser(data.heading2_param)}>{data.heading2}</Typography>
          <p style={styleParser(data.text2_block_param)}>{data.text2_block}</p>
        </div>
      </div>
      <div className={cx.third}>
        <div className={cx.txt}>
          <Typography variant="h3" style={styleParser(data.text_param)}>{data.text}</Typography>
        </div>
        <div className={cls(cx.title, {[cx.isEditable] : isEditable})}>
          <Typography variant="h3" style={styleParser(data.heading3_param)}>{data.heading3}</Typography>
          <p style={styleParser(data.text3_block_param)}>{data.text3_block}</p>
        </div>
        <EditableImage isEditing={isEditable} className={cx.img}/>
      </div>
    </div>


  )
}
