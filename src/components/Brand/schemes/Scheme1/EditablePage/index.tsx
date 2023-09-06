import React from 'react'
import SchemeLayout from "../SchemeLayout"

interface IProps{
  isEditing: boolean,
}


export default function EditablePage({isEditing }: IProps) {
  return (
    <SchemeLayout isEditing={isEditing}/>
  )
}
