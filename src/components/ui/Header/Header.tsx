import React from 'react';
import cx from './index.module.scss';

type Props = {}

export default function Header({}: Props) {
  return (
    <div className={cx.header}>
      <div className={cx.container}>Header</div></div>
  )
}
