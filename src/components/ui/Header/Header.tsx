import React from 'react';
import { ReactComponent as Logo } from "../../../images/icons/logo.svg";
import cx from './index.module.scss';

type Props = {}

export default function Header({}: Props) {
  return (
    <div className={cx.header}>
      <div className={cx.container}><Logo /></div></div>
  )
}
