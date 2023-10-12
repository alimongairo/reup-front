import React, { ReactNode } from 'react';
import { Header, MobileToolbar } from "../../components/ui";
import cx from './index.module.scss';
import { ERoles } from '../../app/router/config';

interface IProps { children: ReactNode }

export default function MainLayout({ children }: IProps) {
  return (
    <div className={cx.wrapper}>
      {/* TODO:  1 or 2 (who is logged) */}
        <Header type={ERoles.customer}/>
        <div className={cx.container}>{children}</div>
        <MobileToolbar />
    </div>
  )
}
