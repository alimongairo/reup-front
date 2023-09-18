import React from 'react';
import { NavLink, NavLinkProps } from "react-router-dom";
import cls from 'classnames';
import cx from './index.module.scss';

export default function MyNavLink(props: NavLinkProps) {
  const { to, children } = props;

  return (
    <NavLink to={to}
      className={({ isActive }) => cls({ [cx.active]: isActive })}
    >
      {children}
    </NavLink>
  )
}
