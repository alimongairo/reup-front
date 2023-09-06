import React from 'react'
import SchemeLayout from "../SchemeLayout"

interface IProps{
  isEditing: boolean,
  isEditable: boolean,
}


export default function EditablePage({isEditing, isEditable }: IProps) {
  return (
    <SchemeLayout isEditing={isEditing} isEditable={isEditable}/>
  )
}
