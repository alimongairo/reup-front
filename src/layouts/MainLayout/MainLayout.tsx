import React, {ReactNode} from 'react';
import { Header } from "../../components/ui";
import cx from './index.module.scss';

interface IProps {children: ReactNode}

export default function MainLayout({children}: IProps) {
  return (
    <div className={cx.wrapper}>
      {/* TODO:  1 or 2 (who is logged) */}
        <Header type={1}/>
        <div className={cx.container}>{children}</div>
        
    </div>
  )
}
