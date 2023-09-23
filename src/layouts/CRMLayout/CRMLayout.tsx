import React, {ReactNode} from 'react';
import { Header } from "../../components/ui";
import cx from './index.module.scss';

interface IProps {children: ReactNode}

export default function CRMLayout({children}: IProps) {
  return (
    <div className={cx.wrapper}>
        <Header type={0}/>
        <div className={cx.container}>{children}</div>

    </div>
  )
}
