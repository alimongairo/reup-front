import React, {ReactNode} from 'react';
import { Header } from "../../components/ui";
import cx from './index.module.scss';

interface IProps {children: ReactNode}

export default function MainLayout({children}: IProps) {
  return (
    <div className={cx.wrapper}>
        <Header />
        <div className={cx.container}>{children}</div>
        
    </div>
  )
}
