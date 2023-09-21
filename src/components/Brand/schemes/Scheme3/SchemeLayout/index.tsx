import React, { useState, useEffect } from 'react'
import cx from './index.module.scss';
import { Button, Image, Typography } from "../../../../ui";
import { ReactComponent as RightArrowIcon } from '../../../../../../static/images/icons/arrows/default.svg';
import { EditableImage } from "../../../components";
import { useGetBrandPageStyle2DataQuery } from '../../../../../redux/api/brandPageStyle2Api';
import { useTypedSelector } from "../../../../../hooks";

interface Iprops {
  isEditing: boolean,
}

// TODO: компонент картинки или добавления is
export default function SchemeLayout({ isEditing }: Iprops) {
  const brand = useTypedSelector((state) => state.brand);
  // TODO: replace "70" to brand.id (67-100 вендор первая схема)
  // TODO: replace 2 to brand.scheme_id (номер схемы)
  let { data, error, isLoading } = useGetBrandPageStyle2DataQuery({ scheme_id: 2, vendor_id: "70" });

  // TODO: fix any
  const [dataObj, setDataObj] = useState<any>();

  useEffect(() => {
    const newDataObj = data && data[0];
    setDataObj(newDataObj);
  }, [data]);

  return (
    <>
      {/* TODO: сделать обработку ошибки и загрузки для всех страниц */}
      {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading ? (
        <p>loading...</p>
      ) : dataObj ? (
        <div className={cx.wrapper}>
          <div className={cx.top}>
            <div className={cx.title}>
              <Typography variant="h2">{dataObj.heading1}</Typography>
              <p>{dataObj.text1_block}</p>
            </div>
            <div className={cx.pic}>
              {/* <Image src={process.env.VITE_PUBLIC_PLACEHOLDER_IMAGE} alt="placeholder" className={cx.image} /> */}
              <EditableImage className={cx.image} isEditing={isEditing} src={dataObj.image_main}/>
              <div className={cx.links}><p>{dataObj.heading2}</p></div>
            </div>
          </div>

          <div className={cx.banner}>
            <Typography variant="h2">{dataObj.text2_block}</Typography>
            <Button variant="contained" endIcon={<RightArrowIcon />}>перейти к товарам</Button>
          </div>

          <div className={cx.gallery}>
            <EditableImage className={cx.image} isEditing={isEditing} src={dataObj.image1_left}/>
            <EditableImage className={cx.image} isEditing={isEditing} src={dataObj.image1_middle}/>
            <EditableImage className={cx.image} isEditing={isEditing} src={dataObj.image1_right}/>
            <EditableImage className={cx.image} isEditing={isEditing} src={dataObj.image2_left}/>
            <div className={cx.title}>
              <Typography variant="h3">{dataObj.heading3}</Typography>
              <p>основной текст</p>
            </div>
            <EditableImage className={cx.image} isEditing={isEditing} src={dataObj.image2_right}/>

          </div>

        </div>

      ) : null}
    </>




  )
}
