import React from 'react';
import { ReactComponent as EditIcon } from "../../../../../../static/images/icons/edit.svg";
import { Typography, Button } from "../../../../../components/ui";
import cls from 'classnames';
import cx from './index.module.scss';

interface IProps {
    isEditable: boolean,
    isEditing: boolean,
    setIsEditing: (val: boolean) => void,
}

export default function Head({ isEditable, isEditing, setIsEditing }: IProps) {
    const onEditClick = () => {
        setIsEditing(true);
    }

    return (
        <div className={cls(cx.wrapper, {
            [cx.isEditable]: isEditable,
        })}>

            <Typography variant="h1">страница бренда</Typography>

            {
                isEditable && !isEditing ? (<Button onClick={onEditClick}>редактировать</Button>) : (
                    <div className={cx.btnsList}>
                        <Button>отменить</Button>
                        <Button>сохранить</Button>
                        <Button viewType="iconBtn"><EditIcon /></Button>
                    </div>
                )
            }

        </div>
    )
}
