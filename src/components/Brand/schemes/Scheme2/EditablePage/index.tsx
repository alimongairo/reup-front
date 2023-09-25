import React from 'react'
import SchemeLayout from "../SchemeLayout"

// TODO: fx any
interface IProps{
  isEditing: boolean,
  isEditable: boolean,
  data: any,
}


export default function EditablePage({isEditing, isEditable, data }: IProps) {
  return (
    <SchemeLayout isEditing={isEditing} isEditable={isEditable} data={data}/>
  )
}
