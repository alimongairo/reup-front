import React from 'react'
import SchemeLayout from "../SchemeLayout"
import { TSchemeData } from "../../../components/Menu/models"

interface IProps{
  isEditing: boolean,
  data: TSchemeData
}


export default function EditablePage({isEditing, data }: IProps) {
  return (
    <SchemeLayout isEditing={isEditing} data={data}/>
  )
}
