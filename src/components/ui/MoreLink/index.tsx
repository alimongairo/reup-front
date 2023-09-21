import React from 'react';
import { ReactComponent as MoreIcon } from '../../../../static/images/icons/more.svg';
import { NavLinkIcon, NavLink } from "..";
import cx from './index.module.scss';

interface IProps {
  to?: string;
}

export default function MoreLink({to = "/"} : IProps) {
  return (
    <NavLink to={to}>
      <>
        <p className={cx.txt}>больше</p>
        <NavLinkIcon to={to}><MoreIcon /></NavLinkIcon>
      </>
    </NavLink>
  )
}