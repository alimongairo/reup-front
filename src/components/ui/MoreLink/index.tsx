import React from 'react';
import { ReactComponent as MoreIcon } from '../../../../static/images/icons/more.svg';
import { NavLink } from "..";
import cx from './index.module.scss';

interface IProps {
  to?: string;
  className?: string;
}

export default function MoreLink({to = "/", className} : IProps) {
  return (
    <NavLink to={to} className={className}>
      <>
        <p className={cx.txt}>больше</p>
       <MoreIcon />
      </>
    </NavLink>
  )
}
