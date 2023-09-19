import React from 'react';
import { NavLink } from "..";
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

interface IProps {
    list: IBrick[];
    className?: string;
}

function Bricks({ list, className }: IProps) {
    return (
        <ul className={cls(cx.bricks, className)}>
            {
                list.map(({ link, label, align = EAlign.Left }) => (
                    <li className={cls(cx.item, cx[align])} key={uid(label)}><NavLink to={link}>{label}</NavLink></li>
                ))
            }
        </ul>
    )
}

export { Bricks, EAlign };
export type { IBrick };
