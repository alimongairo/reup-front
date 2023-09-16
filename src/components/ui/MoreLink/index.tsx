import React from 'react';
import { ReactComponent as MoreIcon } from '../../../../static/images/icons/more.svg';

import cx from './index.module.scss';
import NavLinkIcon from "../NavLinkIcon";
import { NavLink } from "react-router-dom";
import cls from 'classnames';

interface IProps {
  to: string;
}

export default function MoreLink({to = "/"} : IProps) {
  return (
    <NavLink to={to} className={({ isActive }) => cls(cx.more, { [cx.active]: isActive })}>
      <>
        <p className={cx.txt}>больше</p>
        <NavLinkIcon to={to}><MoreIcon /></NavLinkIcon>
      </>
    </NavLink>
  )
}
