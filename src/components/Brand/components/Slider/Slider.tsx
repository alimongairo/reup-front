import React, { useState } from 'react';
import classNames from 'classnames';
// import Image from 'next/image';

// import Heading from '@/components/common/Heading';
// import Text from '@/components/common/Text';
// import LinkWithArrow from '@/components/common/LinkWithArrow';
// import Button from '@/components/common/Button';

import cx from './index.module.scss';
import { Button, Typography } from "../../../ui";
import { EditableImage } from "..";
import { ReactComponent as RightArrowIcon } from '../../../../../static/images/icons/arrows/right.svg';

interface ISlide {
  title: string;
  description?: string;
  imgSource?: string;
}

interface IProps {
  slides: [ISlide, ISlide];
}

const Slider = ({ slides }: IProps) => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className={cx.wrapper}>
      <div className={classNames(cx.slide, { [cx.active]: activeSlide === 0 })}>
    
          {/* TODO: correct this is Editing */}
          <EditableImage isEditing={false} className={cx.image} />
      
        <Typography variant="h2" className={cx.brandName}>
          {slides[0].title || 'Название бренда'}
        </Typography>
        <Button variant="contained" endIcon={<RightArrowIcon />} onClick={() => setActiveSlide(1)} className={cx.nextBtb}><Typography variant="h2" >о нас</Typography></Button>
      </div>
      <div className={classNames(cx.slide, { [cx.active]: activeSlide === 1 })}>
       
          <EditableImage isEditing={false} className={cx.image}/>
      
        <Typography variant="h2" className={cx.brandName}>{slides[1].title}</Typography>
        <Typography variant="h2">{slides[1].description || 'Описание бренда'}</Typography>
        <Button variant="contained" endIcon={<RightArrowIcon />} onClick={() => setActiveSlide(0)} className={cx.backBtb}></Button>
      </div>
    </div>
  );
};

export { Slider };
export type { ISlide }
