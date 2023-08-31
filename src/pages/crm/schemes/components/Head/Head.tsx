import React from 'react'
import { Typography, Button } from "../../../../../components/ui";
import cls from 'classnames';
import cx from './index.module.scss';
import { NavLink } from "react-router-dom";

interface IProps{
    isEditable: boolean,
    schemeId: number,
}

export default function Head({isEditable, schemeId}: IProps) {
  return (
    <div className={cls(cx.wrapper, {
        [cx.isEditable]: isEditable,
    })}>
    <Typography variant="h1">страница бренда</Typography>
    {
        isEditable && (
            <div className={cx.btnsList}>
                {/* TODO: релогин */}
                <Button>выход</Button>

                {/* ссылка на отредактированный шаблон */}
                <NavLink to={`/crm/brand/${schemeId}/?isEditable=false`}><Button>превью</Button></NavLink>
            </div>
        )
    }
    </div>
  )
}
