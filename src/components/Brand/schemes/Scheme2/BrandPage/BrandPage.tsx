import React from 'react'
import SchemeLayout from "../SchemeLayout/SchemeLayout";

interface IProps{
  isEditable: boolean,
}
//TODO: страница отображения бренда на самом сайте
export default function BrandPage({isEditable}: IProps) {
  return (
    <SchemeLayout isEditing={false} isEditable={isEditable}/>
  )
}
