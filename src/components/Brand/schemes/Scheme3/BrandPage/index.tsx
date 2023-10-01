import React from 'react'
import SchemeLayout from "../SchemeLayout";
import { TSchemeData } from "../../../components/Menu/models";

interface IProps {
  data: TSchemeData,
}

//TODO: страница отображения бренда на самом сайте
export default function BrandPage({data} : IProps) {
  return (
    <SchemeLayout isEditing={false} data={data}/>
  )
}
