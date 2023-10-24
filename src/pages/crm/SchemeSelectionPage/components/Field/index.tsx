import React from 'react';
import { ReactComponent as BottomArrowIcon } from 'S#/images/icons/arrows/default.svg';
import { ReactComponent as CrossIcon } from 'S#/images/icons/cross.svg';
import cls from 'classnames';
import cx from './index.module.scss';

interface IProps {
  isActive: boolean;
  title: string;
  onClick: () => void;
}

export default function Field({ isActive, title, onClick }: IProps) {
  return (
    <div className={cx.wrapper} onClick={onClick}>
      <div className={cls(cx.field, {
        [cx.active]: isActive
      })}>
        <p className={cx.title}>{title}</p>
        {
          isActive ? <BottomArrowIcon stroke="#000000" className={cx.bottomArrow} /> : <CrossIcon stroke="#000000" />
        }
      </div>
      {
        isActive && (<p className={cx.desc}>
          описание шаблона (столько-то фото/видео, столько-то блоков для текста)
        </p>)
      }
      
    </div>
  )
}
