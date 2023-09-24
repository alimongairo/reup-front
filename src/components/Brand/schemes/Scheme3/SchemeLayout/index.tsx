import React from 'react';
import { uid } from "react-uid";
import { Button, Typography } from "../../../../ui";
import { ReactComponent as RightArrowIcon } from '../../../../../../static/images/icons/arrows/default.svg';
import { EditableImage } from "../../../components";
import cx from './index.module.scss';

interface IProps {
  isEditing: boolean,
  data: any,
}

// TODO: компонент картинки или добавления is
export default function SchemeLayout({ isEditing, data }: IProps) {
  const categories = ["cat1", "cat2", "cat3"];

  return (
    
        <div className={cx.wrapper}>
          <div className={cx.top}>
            <div className={cx.title}>
              <Typography variant="h2">{data.heading1}</Typography>
              <p>{data.text1_block}</p>
            </div>
            <div className={cx.pic}>
              {/* <Image src={process.env.VITE_PUBLIC_PLACEHOLDER_IMAGE} alt="placeholder" className={cx.image} /> */}
              <EditableImage className={cx.image} isEditing={isEditing} src={data.image_main} />
              <div className={cx.links}>
                <ul className={cx.list}>
                  {
                    categories.map((item, idx) => (
                      <li key={uid(idx)}><p>{item}</p></li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>

          <div className={cx.banner}>
            <Typography variant="h2">{data.heading3}</Typography>
            <Button variant="contained" endIcon={<RightArrowIcon />}>перейти к товарам</Button>
          </div>

          <div className={cx.gallery}>
            <EditableImage className={cx.image} isEditing={isEditing} src={data.image1_left} />
            <EditableImage className={cx.image} isEditing={isEditing} src={data.image1_middle} />
            <EditableImage className={cx.image} isEditing={isEditing} src={data.image1_right} />
            <EditableImage className={cx.image} isEditing={isEditing} src={data.image2_left} />
            <div className={cx.title}>
              <Typography variant="h3">{data.heading2}</Typography>
              <p>{data.text2_block}</p>
            </div>
            <EditableImage className={cx.image} isEditing={isEditing} src={data.image2_right} />

          </div>

        </div>




  )
}
