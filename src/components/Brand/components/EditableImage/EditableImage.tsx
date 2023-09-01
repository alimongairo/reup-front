import React from 'react'
import { Button, Image } from '../../../ui';
import cls from 'classnames';
import cx from './index.module.scss';

interface IProps {
  className?: string,
  src?: string,
  alt?: string,
  isEditing: boolean
}

export default function EditableImage({ isEditing, className, src = process.env.VITE_PUBLIC_PLACEHOLDER_IMAGE, alt = "placeholder" }: IProps) {
  return (
    <div className={cls(className, cx.editableImage)}>
      <Image src={src} alt={alt} />
      {
        isEditing && <Button className={cx.button}>добавить фото / видео</Button>
      }
    </div>
  )
}
