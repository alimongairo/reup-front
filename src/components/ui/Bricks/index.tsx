import React from 'react';
import { NavLink as MyNavLink } from "..";
import { NavLink } from "react-router-dom";
import cls from 'classnames';
import cx from './index.module.scss';
import { uid } from "react-uid";

enum EAlign {
    Left = 'left',
    Center = 'center',
    Right = 'right',
}

interface IBrick {
    label: string;
    link: string;
    align?: EAlign;
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
                list.map(({ link, label, align = EAlign.Left }) => (
                    <li className={cls(cx.item, cx[align])} key={uid(label)}>
                        {
                            colorType === EColorType.TEXT
                                ? (
                                    <MyNavLink to={link} className={cx[colorType]}>{label}</MyNavLink>
                                )
                                : (
                                    <NavLink to={link}
                                        className={({ isActive }) => cls({ [cx.active]: isActive }, cx[colorType], className as string)}
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

export { Bricks, EAlign, EColorType };
export type { IBrick };
