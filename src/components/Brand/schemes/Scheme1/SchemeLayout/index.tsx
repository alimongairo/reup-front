import React, { useState, useEffect } from 'react'
import cx from './index.module.scss';
import { Button, Typography } from "../../../../ui";
import { ReactComponent as RightArrowIcon } from '../../../../../../static/images/icons/arrows/default.svg';
import { ReactComponent as CrossIcon } from '../../../../../../static/images/icons/cross.svg';
import { EditableImage, Slider } from "../../../components";
import { uid } from 'react-uid';
import { useGetBrandPageStyle1DataQuery } from '../../../../../redux/api/brandPageStyle1Api';
import { useTypedSelector } from "../../../../../hooks";

interface Iprops {
  isEditing: boolean,
}

export default function SchemeLayout({ isEditing }: Iprops) {
  const brand = useTypedSelector((state) => state.brand);
  // TODO: replace "12" to brand.id (1-33 вендор первая схема)
  // TODO: replace 0 to brand.scheme_id (номер схемы)
  let { data, error, isLoading } = useGetBrandPageStyle1DataQuery({ scheme_id: 0, vendor_id: "12" });

  // TODO: fix any
  const [dataObj, setDataObj] = useState<any>();

  useEffect(() => {
    const newDataObj = data && data[0];
    setDataObj(newDataObj);
  }, [data]);

  const categories = ["cat1", "cat2", "cat3"];
  const [bricks, setBricks] = useState(categories);

  const onBrickRemove = (index: number) => {
    setBricks((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <>
      {/* TODO: сделать обработку ошибки и загрузки для всех страниц */}
      {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading ? (
        <p>loading...</p>
      ) : dataObj ? (
        <div className={cx.wrapper}>

          <Slider
            slides={[
              {
                title:
                  dataObj.name,
                imgSource: dataObj.image1_main,
              },
              {
                title: dataObj.about,
                description: dataObj.description_2page,
                imgSource: dataObj.image2_main,
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
                dataObj.heading && <Typography variant="h3">{dataObj.heading}</Typography>
              }
              {
                dataObj.text1_block && <p>{dataObj.text1_block}</p>
              }
            </div>
          </div>

          <div className={cx.gallery}>
            <EditableImage className={cx.image} isEditing={isEditing} src={dataObj.image_header1}/>
            <EditableImage className={cx.image} isEditing={isEditing} src={dataObj.image_header2}/>
            <EditableImage className={cx.image} isEditing={isEditing} src={dataObj.image_header3}/>
            <div className={cx.title}>
              {
                dataObj.heading2 && <Typography variant="h3">{dataObj.heading2}</Typography>
              }
              {
                dataObj.text2_block && <p>{dataObj.text2_block}</p>
              }

              {
                dataObj.text2 && <Typography className={cx.subText} variant="h3">{dataObj.text2}</Typography>
              }
            </div>

          </div>

        </div>
      ) : null}
    </>

  )
}
