import React from 'react'
import SchemeLayout from "../SchemeLayout";
import { TSchemeData } from "../../../components/Menu/models";

interface IProps{
  isEditable: boolean,
  data: TSchemeData,
}

export default function BrandPage({isEditable, data}: IProps) {
  return (
    <SchemeLayout isEditing={false} isEditable={isEditable} data={data}/>
  )
}
