import React from 'react';
import { ReactComponent as MoreIcon } from 'S#/images/icons/more.svg';
import { NavLink } from '..';
import cx from './index.module.scss';

interface IProps {
    to?: string;
    className?: string;
    text?: string;
}

export default function MoreLink({
    to = '/',
    className,
    text = 'больше',
}: IProps) {
    return (
        <NavLink to={to} className={className}>
            <>
                <p className={cx.txt}>{text}</p>
                <MoreIcon />
            </>
        </NavLink>
    );
}
