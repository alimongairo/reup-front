import { ReactNode } from 'react';
import { Header } from '@/components/ui';
import cx from './index.module.scss';
import { ERoles } from '@/router/types';

interface IProps {
    children: ReactNode;
}

export default function CRMLayout({ children }: IProps) {
    return (
        <div className={cx.wrapper}>
            <Header type={ERoles.brand} />
            <div className={cx.container}>{children}</div>
        </div>
    );
}
