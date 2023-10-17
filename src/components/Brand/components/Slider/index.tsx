import React, { useState } from 'react';
import { Button, EBtnColor, Typography } from "../../../ui";
import { EditableImage } from "..";
import { ReactComponent as RightArrowIcon } from '../../../../../static/images/icons/arrows/default.svg';
import cls from 'classnames';
import cx from './index.module.scss';
import { TParsedStyle } from "../../../../helpers";

interface ISlide {
  title: string | null;
  titleStyle: TParsedStyle | null;
  description?: string | null;
  descriptionStyle?: TParsedStyle | null;
  imgSource?: string | null;
  imgName: string;
}

interface IProps {
  slides: [ISlide, ISlide];
  isEditing: boolean,
}


const Slider = ({ slides, isEditing }: IProps) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className={cx.wrapper}>

      <div className={cls(cx.slide, { [cx.active]: activeSlide === 0 })}>
        <EditableImage isEditing={isEditing} className={cx.image} src={slides[0].imgSource || process.env.VITE_PUBLIC_PLACEHOLDER_IMAGE} name={slides[0].imgName}/>
        <Typography variant="h2" className={cx.brandName} style={slides[0].titleStyle || {}}>{slides[0].title || 'Название бренда'}</Typography> 
        <Button variant="contained" endIcon={<RightArrowIcon />} onClick={() => setActiveSlide(1)} className={cls(cx.nextBtb, cx.btn)}><Typography variant="h2" >о нас</Typography></Button>
      </div>

      <div className={cls(cx.slide, { [cx.active]: activeSlide === 1 })}>
        <EditableImage isEditing={isEditing} className={cx.image} src={slides[1].imgSource || process.env.VITE_PUBLIC_PLACEHOLDER_IMAGE} name={slides[1].imgName}/>
        <Typography variant="h2" className={cx.brandName} style={slides[1].titleStyle || {}}>{slides[1].title}</Typography>
        <p className={cx.description}>{slides[1].description || 'Описание бренда'}</p>
        <Button variant="contained" endIcon={<RightArrowIcon />} onClick={() => setActiveSlide(0)} className={cls(cx.backBtb, cx.btn)} colorM={EBtnColor.WHITE}></Button>
      </div>

    </div>
  );
};

export { Slider };
export type { ISlide }
