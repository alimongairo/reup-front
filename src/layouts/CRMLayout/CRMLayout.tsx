import  {ReactNode} from 'react';
import { Header } from "../../components/ui";
import cx from './index.module.scss';
import { Roles } from '../../routes/constants';

interface IProps {children: ReactNode}

export default function CRMLayout({children}: IProps) {
  return (
    <div className={cx.wrapper}>
        <Header type={Roles.brand}/>
        <div className={cx.container}>{children}</div>
    </div>
  )
}
