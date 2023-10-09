import React, {ReactNode} from 'react';
import { Footer, Header, MobileToolbar } from "../../components/ui";
import cx from './index.module.scss';

interface IProps {children: ReactNode}

export default function MainLayout({children}: IProps) {
  return (
    <div className={cx.wrapper}>
      {/* TODO:  1 or 2 (who is logged) */}
        <Header type={2}/>
        <div className={cx.container}>{children}</div>
        <MobileToolbar />
        <Footer />
    </div>
  )
}
