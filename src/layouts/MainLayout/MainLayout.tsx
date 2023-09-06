import {ReactNode} from 'react';
import { Header } from "../../components/ui";
import cx from './index.module.scss';
import { ERoles } from '../../app/router/config';

interface IProps {children: ReactNode}

export default function MainLayout({children}: IProps) {
  return (
    <div className={cx.wrapper}>
      {/* TODO: change roles */}
      <Header type={ERoles.brand}/>
      <div className={cx.container}>{children}</div>
    </div>
  )
}
