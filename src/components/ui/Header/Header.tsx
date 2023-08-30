import React from 'react';
import { ReactComponent as Logo } from "../../../../static/images/icons/logo.svg";
import cx from './index.module.scss';
import { confReturner } from "./constants";

interface IProps {
  type: number,
}

export default function Header({type}: IProps ) {

  const config = confReturner(type || 0);

  return (
    <div className={cx.header}>
      <div className={cx.container}>
        <Logo className={cx.logo} />
        <ul className={cx.linksList}>{config?.list.map((item) => <li>{item.name}</li>)}</ul>
      </div>
    </div>
  )
}
