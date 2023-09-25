import React from 'react'
import SchemeLayout from "../SchemeLayout";

//TODO: fx any
interface IProps{
  isEditable: boolean,
  data: any,
}
//TODO: страница отображения бренда на самом сайте
export default function BrandPage({isEditable, data}: IProps) {
  return (
    <SchemeLayout isEditing={false} isEditable={isEditable} data={data}/>
  )
}
