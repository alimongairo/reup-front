import React from 'react'
import SchemeLayout from "../SchemeLayout";

interface IProps {
  data: any;
}
//TODO: страница отображения бренда на самом сайте
export default function BrandPage({data} : IProps) {
  return (
    <SchemeLayout isEditing={false} data={data}/>
  )
}
