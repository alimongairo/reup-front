import React from 'react';
import { EBrickAlign, NavLink as MyNavLink } from "..";
import { NavLink } from "react-router-dom";
import cls from 'classnames';
import cx from './index.module.scss';
import { uid } from "react-uid";

interface IBrick {
    label: string;
    link: string;
    align?: EBrickAlign;
    isMain?: boolean;
}

enum EColorType {
    FILL = 'fill',
    TEXT = 'text'
}

interface IProps {
    list: IBrick[];
    className?: string;
    colorType?: EColorType;
}

function Bricks({ list, colorType = EColorType.TEXT, className }: IProps) {
    return (
        <ul className={cls(cx.bricks, className)}>
            {
                list.map(({ link, label, align = EBrickAlign.Left, isMain = false }) => (
                    <li className={cls(cx.item, cx[align])} key={uid(label)}>
                        {
                            colorType === EColorType.TEXT
                                ? (
                                    <MyNavLink to={link} className={cx[colorType]}>{label}</MyNavLink>
                                )
                                : (
                                    <NavLink to={link}
                                        className={({ isActive }) => cls({ [cx.active]: isActive }, cx[colorType], {[cx.mainLink]: isMain})}
                                    >
                                        {label}
                                    </NavLink>)
                        }


                    </li>
                ))
            }
        </ul>
    )
}

export { Bricks, EBrickAlign, EColorType };
export type { IBrick };
