import React, { useState } from 'react'
import { Button, Typography } from "../../../../ui";
import { ReactComponent as RightArrowIcon } from '../../../../../../static/images/icons/arrows/default.svg';
import { ReactComponent as CrossIcon } from '../../../../../../static/images/icons/cross.svg';
import { EditableImage, Slider } from "../../../components";
import { uid } from 'react-uid';
import cx from './index.module.scss';
import { styleParser } from "../../../../../helpers";

// TODO: fx any
interface IProps {
  isEditing: boolean,
  data: any;
}

export default function SchemeLayout({ isEditing, data }: IProps) {
  const categories = ["cat1", "cat2", "cat3"];
  const [bricks, setBricks] = useState(categories);

  const onBrickRemove = (index: number) => {
    setBricks((prev) => prev.filter((_, i) => i !== index));
  }

  return (

    <div className={cx.wrapper} >
      <Slider
        slides={[
          {
            title: data.name,
            titleStyle: styleParser(data.name_param),
            imgSource: data.image1_main,
            imgName: 'image1_main',
          },
          {
            title: data.about,
            titleStyle: styleParser(data.about_param),
            description: data.description_2page,
            descriptionStyle: styleParser(data.description_2page_param),
            imgSource: data.image2_main,
            imgName: 'image2_main',
          },
        ]}
        isEditing={isEditing}
      />

      <div className={cx.links}>
        <div className={cx.bricks}>
          <Typography variant="h3">категории товаров</Typography>
          <Button variant="contained" endIcon={<RightArrowIcon />}>больше</Button>

          <div className={cx.bricksList}>
            {
              bricks.map((item, index) => (
                <Button key={uid(item, index)} className={cx.brick} endIcon={isEditing ? <CrossIcon onClick={() => onBrickRemove(index)} /> : null} iconName="cross">{item}</Button>
              ))
            }
          </div>

        </div>
        <div className={cx.main}>
          {
            data.heading && <Typography variant="h3" style={styleParser(data.heading1_param) || ''}>{data.heading}</Typography>
          }
          {
            data.text1_block && <p style={styleParser(data.text1_block_param)}>{data.text1_block}</p>
          }
        </div>
      </div>

      <div className={cx.gallery}>
        <EditableImage className={cx.image} isEditing={isEditing} src={data.image_header1} name='image_header1'/>
        <EditableImage className={cx.image} isEditing={isEditing} src={data.image_header2} name="image_header2"/>
        <EditableImage className={cx.image} isEditing={isEditing} src={data.image_header3} name="image_header2"/>
        <div className={cx.title}>
          {
            data.heading2 && <Typography variant="h3" style={styleParser(data.heading2_param)}>{data.heading2}</Typography>
          }
          {
            data.text2_block && <p style={styleParser(data.text2_block_param)}>{data.text2_block}</p>
          }

          {
            data.text2 && <Typography className={cx.subText} variant="h3" style={styleParser(data.text2_param)}>{data.text2}</Typography>
          }
        </div>

      </div>

    </div>
  )


}
