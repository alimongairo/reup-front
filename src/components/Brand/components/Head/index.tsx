import { useState } from 'react';
import { ReactComponent as EditIcon } from "S#/images/icons/edit.svg";
import { Typography, Button, PopUp } from "@/components/ui";
import { Menu } from "@/components/Brand/components";
import { ELabelsName } from "@/components/Brand/components/Menu/models";
import cls from 'classnames';
import cx from './index.module.scss';

interface IProps {
    isEditable: boolean,
    isEditing: boolean,
    setIsEditing: (val: boolean) => void,
    activeMenu: ELabelsName,
}

export default function Head({ isEditable, isEditing, setIsEditing, activeMenu }: IProps) {
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
                    ? (isEditing ? (<Button onClick={onEditClick}>редактировать</Button>) : (
                        <div className={cx.btnsList}>
                            <Button onClick={handleOpenCancelConfirm}>отменить</Button>
                            <Button onClick={handleOpenSaveConfirm}>сохранить</Button>
                            <Button viewType="iconBtn" onClick={toggleMenu} isActive={visibleMenu}><EditIcon /></Button>
                            <Menu visible={visibleMenu} activeMenu={activeMenu} />
                        </div>
                    ))
                    : null
            }

            <PopUp
                visible={isCancelOpen}
                onClose={handleCloseCancelConfirm}
                onSubmit={() => {}}
                type='confirm'
            >
                <div>Вы действительно хотите отменить изменения?</div>
            </PopUp>

            <PopUp
                visible={isSaveOpen}
                onClose={handleCloseSaveConfirm}
                type='custom'
                customButtons={
                    <>
                        <Button onClick={handleCloseSaveConfirm}>назад</Button>
                        <Button onClick={() => {}}>сохранить</Button>
                    </>
                }
            >
                <div>Проверьте изменения, после подтверждения сохранения ваша страница будет обновлена!</div>
            </PopUp>

        </div>
    )
}
