import React from 'react'
import SchemeLayout from "../SchemeLayout";
import { IScheme2Brand } from "../../../../../types/brandTypes";

interface IProps{
  isEditable: boolean,
  data: IScheme2Brand,
}

export default function BrandPage({isEditable, data}: IProps) {
  return (
    <SchemeLayout isEditing={false} isEditable={isEditable} data={data}/>
  )
}
