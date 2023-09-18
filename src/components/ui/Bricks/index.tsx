import React from 'react';
import { NavLink } from "..";
import cls from 'classnames';
import cx from './index.module.scss';

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
}

function Bricks({ list }: IProps) {
    return (
        <ul className={cx.bricks}>
            {
                list.map(({ link, label, align = EAlign.Left }) => (
                    <li className={cls(cx.item, cx[align])}><NavLink to={link}>{label}</NavLink></li>
                ))
            }
        </ul>
    )
}

export { Bricks, EAlign };
export type { IBrick };
