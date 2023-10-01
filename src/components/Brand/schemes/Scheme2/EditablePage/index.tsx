import React from 'react'
import SchemeLayout from "../SchemeLayout"
import { TSchemeData } from "../../../components/Menu/models"

interface IProps{
  isEditing: boolean,
  isEditable: boolean,
  data: TSchemeData,
}

export default function EditablePage({isEditing, isEditable, data }: IProps) {
  return (
    <SchemeLayout isEditing={isEditing} isEditable={isEditable} data={data}/>
  )
}
