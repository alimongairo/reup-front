import React, { useState } from 'react';
import { ReactComponent as EditIcon } from "../../../../../static/images/icons/edit.svg";
import { Typography, Button } from "../../../ui";
import { Menu } from "..";
import cls from 'classnames';
import cx from './index.module.scss';
import Confirm from "../../../ui/Confirm";

interface IProps {
    isEditable: boolean,
    isEditing: boolean,
    setIsEditing: (val: boolean) => void,
}

export default function Head({ isEditable, isEditing, setIsEditing }: IProps) {
    const [visibleMenu, setVisibleMenu] = useState(true);

    const toggleMenu = () => setVisibleMenu((prev) => !prev);

    const onEditClick = () => {
        setIsEditing(true);
    }

    const [isCancelOpen, setIsCancelOpen] = useState(false);
    const [isSaveOpen, setIsSaveOpen] = useState(false);

    const handleOpenCancelConfirm = () => {
        setIsCancelOpen(true);
    }

    const handleCloseCancelConfirm = () => {
        setIsCancelOpen(false);
    }

    const handleOpenSaveConfirm = () => {
        setIsCancelOpen(true);
    }

    const handleCloseSaveConfirm = () => {
        setIsCancelOpen(false);
    }

    return (
        <div className={cls(cx.wrapper, {
            [cx.isEditable]: isEditable,
        })}>

            <Typography variant="h1">страница бренда</Typography>

            {
                isEditable
                    // TODO: return !isEditing
                    ? (!isEditing ? (<Button onClick={onEditClick}  >редактировать</Button>) : (
                        <div className={cx.btnsList}>
                            <Button onClick={handleOpenCancelConfirm}>отменить</Button>
                            <Button onClick={handleOpenSaveConfirm}>сохранить</Button>
                            <Button viewType="iconBtn" onClick={toggleMenu} isActive={visibleMenu}><EditIcon /></Button>
                            <Menu visible={visibleMenu} />
                        </div>
                    ))
                    : null
            }

            <Confirm
                visible={isCancelOpen}
                onClose={handleCloseCancelConfirm}
                onSubmit={() => { }}
            >
                <div>Вы действительно хотите отменить изменения? Данное действие нельзя отменить.</div>
            </Confirm>

            <Confirm
                visible={isSaveOpen}
                onClose={handleCloseSaveConfirm}
                onSubmit={() => { }}
            >
                <div>Проверьте ваши изменения, после подтверждения сохранения ваша страница будет обновлена!</div>
            </Confirm>

        </div>
    )
}
