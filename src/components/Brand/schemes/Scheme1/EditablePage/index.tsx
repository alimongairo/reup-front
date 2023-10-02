import React from 'react'
import SchemeLayout from "../SchemeLayout";
import { IScheme1Brand } from "../../../../../types/brandTypes";

interface IProps{
  isEditing: boolean,
  data: IScheme1Brand
}


export default function EditablePage({isEditing, data }: IProps) {
  return (
    <SchemeLayout isEditing={isEditing} data={data}/>
  )
}
