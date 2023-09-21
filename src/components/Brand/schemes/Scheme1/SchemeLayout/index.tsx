import React, { useState, useEffect } from 'react'
import cx from './index.module.scss';
import { Button, Typography } from "../../../../ui";
import { ReactComponent as RightArrowIcon } from '../../../../../../static/images/icons/arrows/default.svg';
import { ReactComponent as CrossIcon } from '../../../../../../static/images/icons/cross.svg';
import { EditableImage, Slider, ISlide } from "../../../components";
import { uid } from 'react-uid';
import { useGetBrandPageStyle1DataQuery } from '../../../../../redux/api/brandApi';
import { useTypedSelector } from "../../../../../hooks";

interface Iprops {
  isEditing: boolean,
}

export default function SchemeLayout({ isEditing }: Iprops) {
  const brand = useTypedSelector((state) => state.brand);
  let { data, error, isLoading, isUninitialized } = useGetBrandPageStyle1DataQuery({ scheme_id: brand.scheme_id, vendor_id: brand.id }); // TODO: вывести поля

  const [slides, setSlides] = useState<any>([]);


  useEffect(() => {
    setSlides([
      {
        title:
          data && data[0].name,
      },
      {
        title: data && data[0].about,
        description: data && data[0].description_2page,
      },
    ]);
  }, [data])

  const categories = ["cat1", "cat2", "cat3"];
  const [bricks, setBricks] = useState(categories);

  const onBrickRemove = (index: number) => {
    setBricks((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <>
    {/* TODO: сделать обработку ошибки и загрузки для всех страниц */}
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>loading...</>
      ) : data ? (
        <div className={cx.wrapper}>

          <Slider slides={slides} isEditing={isEditing} />

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
      ) : null}
    </>

  )
}
