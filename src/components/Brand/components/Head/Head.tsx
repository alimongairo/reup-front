import React from 'react';
import { ReactComponent as EditIcon } from "../../../../../static/images/icons/edit.svg";
import { Typography, Button } from "../../../../components/ui";
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
    console.log(isEditable)

    return (
        <div className={cls(cx.wrapper, {
            [cx.isEditable]: isEditable,
        })}>

            <Typography variant="h1">страница бренда</Typography>

            {
                isEditable
                    ? (!isEditing ? (<Button onClick={onEditClick} colorM="black">редактировать</Button>) : (
                        <div className={cx.btnsList}>
                            <Button colorM="black">отменить</Button>
                            <Button colorM="black">сохранить</Button>
                            <Button colorM="black" viewType="iconBtn"><EditIcon /></Button>
                        </div>
                    )) 
                    : null
            }

        </div>
    )
}
