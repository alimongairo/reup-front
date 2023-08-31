import React from 'react'
import { Typography } from "../../../../../components/ui";
import cls from 'classnames';
import cx from './index.module.scss';

interface IProps{
    isEditable: boolean
}

export default function Head({isEditable}: IProps) {
  return (
    <div className={cls(cx.wrapper, {
        [cx.isEditable]: isEditable,
    })}>
    <Typography variant="h2">страница бренда</Typography>
    {
        isEditable && (
            <div>btns</div>
        )
    }
    </div>
  )
}
